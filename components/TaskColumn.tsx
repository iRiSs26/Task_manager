"use client";
// components/TaskColumn.tsx

// components/TaskColumn.tsx
// components/TaskColumn.tsx
// components/TaskColumn.tsx
import React from 'react';
import { Task } from '../types/types';
import TaskCard from './TaskCard';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;



