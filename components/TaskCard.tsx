// components/TaskCard.tsx
import React from 'react';
import { Task } from '../types/types';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-lg bg-white">
      {/* Status */}
      <div className="text-xs font-bold text-gray-500 uppercase mb-2">
        {task.status}
      </div>

      {/* Task content */}
      <div className="flex flex-col space-y-2">
        {/* Priority */}
        <div className="flex items-center space-x-2">
          <div className={`px-2 py-1 rounded text-xs font-semibold ${
            task.priority === 'High' ? 'bg-red-200 text-red-600' :
            task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-600' :
            'bg-green-200 text-green-600'
          }`}>
            {task.priority}
          </div>

          {/* Title */}
          <span className="font-semibold text-lg">
            {task.title}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm">
          {task.description}
        </p>

        {/* Deadline */}
        <div className="text-gray-500 text-xs">
          <strong>Deadline: </strong>{task.date}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
