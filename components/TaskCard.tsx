

// // import React, { useState } from 'react';
// // import { Task } from '../types/types';
// // import { updateTaskStatus } from '../utils/taskOperations';

// // interface TaskCardProps {
// //   task: Task;
// //   onStatusChange: (taskId: string, newStatus: string) => void;
// //   onEdit: (taskId: string) => void;
// //   onDelete: (taskId: string) => void;
// // }

// // const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onEdit, onDelete }) => {
// //   const [showDropdown, setShowDropdown] = useState(false);

// //   const handleStatusChange = async (status: string) => {
// //     try {
// //       // Update status in Firestore
// //       await updateTaskStatus(task.id, status);

// //       // Notify parent component about the status change
// //       onStatusChange(task.id, status);
// //       setShowDropdown(false); // Close the dropdown after selection
// //     } catch (error) {
// //       console.error('Error changing task status:', error);
// //     }
// //   };

// //   return (
// //     <div className="bg-white p-4 rounded shadow-md mb-4 relative">
// //       {/* Priority displayed above the title */}
// //       <p className={`text-sm font-bold mb-2 
// //         ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
// //         {task.priority.toUpperCase()}
// //       </p>
// //       <h3 className="text-lg font-semibold">{task.title}</h3>
// //       <p className="text-gray-600">{task.description}</p>
// //       <p className="text-sm text-gray-500">Deadline: {task.date}</p>
// //       <button
// //         onClick={() => setShowDropdown(!showDropdown)}
// //         className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
// //       >
// //         Change Status
// //       </button>
// //       {showDropdown && (
// //         <div className="mt-2 absolute bg-white border rounded shadow-lg">
// //           <select
// //             value={task.status}
// //             onChange={(e) => handleStatusChange(e.target.value)}
// //             className="w-full p-2 border border-gray-300 rounded"
// //           >
// //             <option value="TODO">TODO</option>
// //             <option value="IN PROGRESS">IN PROGRESS</option>
// //             <option value="COMPLETED">COMPLETED</option>
// //           </select>
// //         </div>
// //       )}
// //       <button
// //         onClick={() => onEdit(task.id)}
// //         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded"
// //       >
// //         Edit
// //       </button>
// //       <button
// //         onClick={() => onDelete(task.id)}
// //         className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
// //       >
// //         Delete
// //       </button>
// //     </div>
// //   );
// // };

// // export default TaskCard;


// import React, { useState } from 'react';
// import { Task } from '../types/types';
// import { updateTaskStatus } from '../utils/taskOperations';

// interface TaskCardProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: string) => void;
//   onEdit: (taskId: string) => void;
//   onDelete: (taskId: string) => void;
// }

// const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onEdit, onDelete }) => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleStatusChange = async (status: string) => {
//     try {
//       // Update status in Firestore
//       await updateTaskStatus(task.id, status);

//       // Notify parent component about the status change
//       onStatusChange(task.id, status);
//       setShowDropdown(false); // Close the dropdown after selection
//     } catch (error) {
//       console.error('Error changing task status:', error);
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow-md mb-4 relative">
//       {/* Dropdown arrow to change status */}
//       <div className="absolute top-2 right-2">
//         <button
//           onClick={() => setShowDropdown(!showDropdown)}
//           className="text-gray-500 focus:outline-none"
//         >
//           ▼
//         </button>

//         {showDropdown && (
//           <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
//             <select
//               value={task.status}
//               onChange={(e) => handleStatusChange(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="TODO">TODO</option>
//               <option value="IN PROGRESS">IN PROGRESS</option>
//               <option value="COMPLETED">COMPLETED</option>
//             </select>
//           </div>
//         )}
//       </div>

//       {/* Display priority above the task title */}
//       <p className="text-sm font-semibold">
//         Priority: 
//         <span
//           className={`ml-2 ${
//             task.priority === 'High'
//               ? 'text-red-500'
//               : task.priority === 'Medium'
//               ? 'text-yellow-500'
//               : 'text-green-500'
//           }`}
//         >
//           {task.priority}
//         </span>
//       </p>

//       <h3 className="text-lg font-semibold">{task.title}</h3>
//       <p className="text-gray-600">{task.description}</p>
//       <p className="text-sm text-gray-500">Deadline: {task.date}</p>

//       <button
//         onClick={() => onEdit(task.id)}
//         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded"
//       >
//         Edit
//       </button>
//       <button
//         onClick={() => onDelete(task.id)}
//         className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default TaskCard;
import React, { useState } from 'react';
import { Task } from '../types/types';
import { updateTaskStatus } from '../utils/taskOperations';

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: string) => void;
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onEdit, onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleStatusChange = async (status: string) => {
    try {
      // Update status in Firestore
      await updateTaskStatus(task.id, status);

      // Notify parent component about the status change
      onStatusChange(task.id, status);
      setShowDropdown(false); // Close the dropdown after selection
    } catch (error) {
      console.error('Error changing task status:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4 relative">
      {/* Dropdown arrow to change status */}
      <div className="absolute top-2 right-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-500 focus:outline-none"
        >
          ▼
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="TODO">TODO</option>
              <option value="IN PROGRESS">IN PROGRESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>
        )}
      </div>

      {/* Display priority above the task title */}
      <p className="text-sm font-semibold">
        Priority: 
        <span
          className={`ml-2 ${
            task.priority === 'High'
              ? 'text-red-500'
              : task.priority === 'Medium'
              ? 'text-yellow-500'
              : 'text-green-500'
          }`}
        >
          {task.priority}
        </span>
      </p>

      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500">Deadline: {task.date}</p>

      <button
        onClick={() => onEdit(task.id)}
        className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded"
      >
        Edit
      </button>

      {/* Move delete button to bottom-right corner */}
      <button
        onClick={() => onDelete(task.id)}
        className="absolute right-2 bottom-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
