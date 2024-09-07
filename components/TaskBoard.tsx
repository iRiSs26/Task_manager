"use client"

import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal'; // Import TaskModal for adding tasks
import { Task } from '../types/types';
import { getTasks, updateTaskStatus, deleteTask } from '../utils/taskOperations'; // Ensure this fetches tasks correctly

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<{ todo: Task[], inProgress: Task[], completed: Task[] }>({
    todo: [],
    inProgress: [],
    completed: []
  });

  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle opening/closing the modal
  const toggleModal = () => setModalOpen(!isModalOpen);

  // Fetch tasks from Firestore
  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle task status change
  const handleTaskStatusChange = async (taskId: string, newStatus: string) => {
    try {
      await updateTaskStatus(taskId, newStatus); // Update the task status in Firestore

      // Update local state without re-fetching from Firestore
      setTasks(prevTasks => {
        const updatedTasks = { ...prevTasks };

        // Find the task to be updated
        const taskToUpdate = [
          ...prevTasks.todo,
          ...prevTasks.inProgress,
          ...prevTasks.completed
        ].find(task => task.id === taskId);

        if (taskToUpdate) {
          // Remove task from its current status array
          const currentStatus = taskToUpdate.status.toLowerCase() as keyof typeof updatedTasks;
          if (updatedTasks[currentStatus]) {
            updatedTasks[currentStatus] = updatedTasks[currentStatus].filter(task => task.id !== taskId);
          }

          // Update task status
          taskToUpdate.status = newStatus;

          // Add task to its new status array
          const newStatusKey = newStatus.toLowerCase() as keyof typeof updatedTasks;
          if (updatedTasks[newStatusKey]) {
            updatedTasks[newStatusKey].push(taskToUpdate);
          }
        }

        return updatedTasks;
      });
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  // Handle task deletion
  const handleTaskDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId); // Delete task from Firestore

      // Update local state to remove the deleted task
      setTasks(prevTasks => {
        const updatedTasks = { ...prevTasks };

        // Remove task from all status arrays
        updatedTasks.todo = updatedTasks.todo.filter(task => task.id !== taskId);
        updatedTasks.inProgress = updatedTasks.inProgress.filter(task => task.id !== taskId);
        updatedTasks.completed = updatedTasks.completed.filter(task => task.id !== taskId);

        return updatedTasks;
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Handle task editing
  const handleTaskEdit = (task: Task) => {
    console.log('Edit task', task); // Replace with actual edit logic
    toggleModal(); // Assuming you want to open the modal for editing
  };

  return (
    <div className="container mx-auto p-4 relative">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </div>

      {/* Create New Task button positioned at the top-right corner */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition absolute top-4 right-4"
        onClick={toggleModal}
      >
        Create New Task
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <TaskColumn
          title="To Do"
          tasks={tasks.todo}
          onTaskStatusChange={handleTaskStatusChange}
          onEdit={handleTaskEdit}
          onDelete={handleTaskDelete}
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.inProgress}
          onTaskStatusChange={handleTaskStatusChange}
          onEdit={handleTaskEdit}
          onDelete={handleTaskDelete}
        />
        <TaskColumn
          title="Completed"
          tasks={tasks.completed}
          onTaskStatusChange={handleTaskStatusChange}
          onEdit={handleTaskEdit}
          onDelete={handleTaskDelete}
        />
      </div>

      {/* Render TaskModal when modal is open */}
      {isModalOpen && <TaskModal close={toggleModal} />}
    </div>
  );
};

export default TaskBoard;




