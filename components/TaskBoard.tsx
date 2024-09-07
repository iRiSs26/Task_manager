"use client"
// components/TaskBoard.tsx
// components/TaskBoard.tsx
// components/TaskBoard.tsx
import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal'; // Import TaskModal for adding tasks
import { Task } from '../types/types';

interface TaskBoardProps {
  tasks: {
    todo: Task[];
    inProgress: Task[];
    completed: Task[];
  };
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle opening/closing the modal
  const toggleModal = () => setModalOpen(!isModalOpen);

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
        <TaskColumn title="To Do" tasks={tasks.todo} />
        <TaskColumn title="In Progress" tasks={tasks.inProgress} />
        <TaskColumn title="Completed" tasks={tasks.completed} />
      </div>

      {/* Render TaskModal when modal is open */}
      {isModalOpen && <TaskModal close={toggleModal} />}
    </div>
  );
};

export default TaskBoard;


// import { useState, useEffect } from 'react';
// import TaskModal from './TaskModal'; // Ensure correct path
// import { getTasks } from '../utils/taskOperations'; // Ensure correct path
// import { Task } from '../types/types'; // Ensure correct path

// const TaskBoard = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [tasks, setTasks] = useState<{ todo: Task[], inProgress: Task[], completed: Task[] }>({
//     todo: [],
//     inProgress: [],
//     completed: []
//   });

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const tasksData = await getTasks();
//         setTasks(tasksData);
//       } catch (error) {
//         console.error('Error fetching tasks in TaskBoard:', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   return (
//     <div>
//       <button onClick={openModal}>Add Task</button>
//       {isModalOpen && <TaskModal close={closeModal} />}
//       <div>
//         <h2>TODO</h2>
//         {tasks.todo.map(task => (
//           <div key={task.id}>{task.title}</div>
//         ))}
//         <h2>In Progress</h2>
//         {tasks.inProgress.map(task => (
//           <div key={task.id}>{task.title}</div>
//         ))}
//         <h2>Completed</h2>
//         {tasks.completed.map(task => (
//           <div key={task.id}>{task.title}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;
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

