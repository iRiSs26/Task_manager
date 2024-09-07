import React from 'react';
import { Task } from '../types/types';
import TaskCard from './TaskCard';
import { deleteTask } from '../utils/taskOperations'; // Import deleteTask function

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId); // Call deleteTask function
      console.log('Task deleted successfully');
      // Optionally, trigger a state update or re-fetch tasks if needed
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
