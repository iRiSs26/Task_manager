import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the down arrow icon
import { Task } from '../types/types';
import { updateTaskStatus, deleteTask } from '../utils/taskOperations'; // Ensure these functions are imported

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: string) => void;
  onEdit: (task: Task) => void; // Callback for editing task
  onDelete: (taskId: string) => void; // Callback for deleting task
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onEdit, onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleStatusChange = (status: string) => {
    onStatusChange(task.id, status);
    setShowDropdown(false); // Close the dropdown after selection
  };

  const handleDelete = async () => {
    await deleteTask(task.id); // Call deleteTask function
    onDelete(task.id); // Notify parent component about the deletion
  };

  return (
    <div className="relative border p-4 rounded-lg bg-white shadow-lg">
      {/* Task details */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
      </div>

      {/* Dropdown for status change */}
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={() => setShowDropdown(prev => !prev)}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <FaChevronDown />
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
            <ul className="list-none p-2 m-0">
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleStatusChange('TODO')}
              >
                To Do
              </li>
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleStatusChange('IN PROGRESS')}
              >
                In Progress
              </li>
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleStatusChange('COMPLETED')}
              >
                Completed
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Edit and Delete buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;


