import React, { useState } from 'react';
import { Task } from '../types/types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onTaskStatusChange: (taskId: string, newStatus: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => Promise<void>;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onTaskStatusChange, onEdit, onDelete }) => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleStatusChange = (taskId: string, newStatus: string) => {
    onTaskStatusChange(taskId, newStatus);
    setDropdownOpen(null); // Close dropdown after changing status
  };

  const handleEdit = (task: Task) => {
    onEdit(task);
  };

  const handleDelete = async (taskId: string) => {
    await onDelete(taskId);
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div>
        {tasks.map(task => (
          <div key={task.id} className="mb-4 p-4 border rounded bg-gray-100 relative">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <div className="absolute top-2 right-2 flex items-center">
              {/* Dropdown for status change */}
              <div className="relative">
                <button
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setDropdownOpen(prev => prev === task.id ? null : task.id)}
                >
                  <MdArrowDropDown size={24} />
                </button>
                {dropdownOpen === task.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleStatusChange(task.id, 'TODO')}
                    >
                      To Do
                    </button>
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleStatusChange(task.id, 'IN PROGRESS')}
                    >
                      In Progress
                    </button>
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleStatusChange(task.id, 'COMPLETED')}
                    >
                      Completed
                    </button>
                  </div>
                )}
              </div>
              {/* Buttons for edit and delete */}
              <button
                className="ml-2 text-blue-600 hover:text-blue-900"
                onClick={() => handleEdit(task)}
              >
                <FaEdit size={16} />
              </button>
              <button
                className="ml-2 text-red-600 hover:text-red-900"
                onClick={() => handleDelete(task.id)}
              >
                <FaTrash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;

