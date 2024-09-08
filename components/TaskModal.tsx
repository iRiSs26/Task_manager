// // import React, { useState, useEffect } from 'react';
// // import { addTask } from '../utils/taskOperations';

// // interface TaskModalProps {
// //   close: () => void;
// // }

// // const TaskModal: React.FC<TaskModalProps> = ({ close }) => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [status, setStatus] = useState('TODO');
// //   const [date, setDate] = useState('');
// //   const [priority, setPriority] = useState('Medium');
// //   const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

// //   // Debugging: Track component re-renders
// //   useEffect(() => {
// //     console.log('TaskModal rendered');
// //   });

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // Prevent submission if already submitting
// //     if (isSubmitting) return;

// //     setIsSubmitting(true);

// //     const newTask = {
// //       title,
// //       description,
// //       status,
// //       date,
// //       priority,
// //     };

// //     try {
// //       console.log('Submitting task:', newTask);
// //       await addTask(newTask); // Add the task
// //       console.log('Task added successfully');
// //       close(); // Close the modal after submission
// //     } catch (error) {
// //       console.error('Error adding task:', error);
// //     } finally {
// //       setIsSubmitting(false); // Reset submitting state
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-lg font-bold mb-4">Add New Task</h2>
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             placeholder="Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           />
// //           <textarea
// //             placeholder="Description"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           />
// //           <select
// //             value={status}
// //             onChange={(e) => setStatus(e.target.value)}
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           >
// //             <option value="TODO">TODO</option>
// //             <option value="IN PROGRESS">IN PROGRESS</option>
// //             <option value="COMPLETED">COMPLETED</option>
// //           </select>
// //           <input
// //             type="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           />
// //           <select
// //             value={priority}
// //             onChange={(e) => setPriority(e.target.value)}
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           >
// //             <option value="Low">Low</option>
// //             <option value="Medium">Medium</option>
// //             <option value="High">High</option>
// //           </select>
// //           <div className="flex justify-between">
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white px-4 py-2 rounded"
// //               disabled={isSubmitting}
// //             >
// //               {isSubmitting ? 'Adding...' : 'Add Task'}
// //             </button>
// //             <button
// //               type="button"
// //               className="bg-red-500 text-white px-4 py-2 rounded"
// //               onClick={close}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskModal;
// import React, { useState } from 'react';
// import { addTask } from '../utils/taskOperations'; // Ensure the correct path
// import { Task } from '../types/types'; // Ensure the correct path

// interface TaskModalProps {
//   closeModal: () => void;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ closeModal }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('TODO');
//   const [date, setDate] = useState('');
//   const [priority, setPriority] = useState('');

//   const handleSubmit = async () => {
//     const newTask: Omit<Task, 'id'> = {
//       title,
//       description,
//       status,
//       date,
//       priority
//     };

//     await addTask(newTask);
//     closeModal();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//         <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         />
//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         >
//           <option value="TODO">To Do</option>
//           <option value="IN PROGRESS">In Progress</option>
//           <option value="COMPLETED">Completed</option>
//         </select>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           placeholder="Priority"
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         />
//         <div className="flex justify-end">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Submit
//           </button>
//           <button
//             onClick={closeModal}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;




import React, { useState } from 'react';
import { addTask } from '../utils/taskOperations';
import { Task } from '../types/types';

interface TaskModalProps {
  close: () => void;
  onTaskCreated: () => void; // Callback to notify TaskBoard of new task
}

const TaskModal: React.FC<TaskModalProps> = ({ close, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('TODO');
  const [priority, setPriority] = useState('Low');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newTask: Omit<Task, 'id'> = {
        title,
        description,
        status,
        date,
        priority
      };
      await addTask(newTask);
      onTaskCreated(); // Notify TaskBoard of new task
      close();
    } catch (error) {
      console.error('Error adding task:', error);
      // You might want to show a user-friendly error message here
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="TODO">To Do</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Deadline</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Create Task
            </button>
          </div>
        </form>
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TaskModal;

