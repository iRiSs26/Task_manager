"use client"
// components/TaskBoard.tsx

import { useState, useEffect } from 'react';
import TaskModal from './TaskModal'; // Ensure correct path
import { getTasks } from '../utils/taskOperations'; // Ensure correct path
import { Task } from '../types/types'; // Ensure correct path

const TaskBoard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState<{ todo: Task[], inProgress: Task[], completed: Task[] }>({
    todo: [],
    inProgress: [],
    completed: []
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks in TaskBoard:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <button onClick={openModal}>Add Task</button>
      {isModalOpen && <TaskModal close={closeModal} />}
      <div>
        <h2>TODO</h2>
        {tasks.todo.map(task => (
          <div key={task.id}>{task.title}</div>
        ))}
        <h2>In Progress</h2>
        {tasks.inProgress.map(task => (
          <div key={task.id}>{task.title}</div>
        ))}
        <h2>Completed</h2>
        {tasks.completed.map(task => (
          <div key={task.id}>{task.title}</div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
// components/TaskBoard.tsx

// import { FC } from 'react';
// import TaskColumn from './TaskColumn';
// import { Task } from '../types/types'; // Ensure correct path

// interface TaskBoardProps {
//   tasks: {
//     todo: Task[];
//     inProgress: Task[];
//     completed: Task[];
//   };
// }

// const TaskBoard: FC<TaskBoardProps> = ({ tasks }) => {
//   return (
//     <div>
//       <TaskColumn id="todo" title="TODO" tasks={tasks.todo} />
//       <TaskColumn id="in-progress" title="IN PROGRESS" tasks={tasks.inProgress} />
//       <TaskColumn id="completed" title="COMPLETED" tasks={tasks.completed} />
//     </div>
//   );
// };

// export default TaskBoard;

