
import React from 'react';
import { getTasks } from '../utils/taskOperations';
import TaskBoard from '../components/TaskBoard';

const Page = async () => {
  const tasks = await getTasks();

  return (
    <div className="container mx-auto p-4">
      <TaskBoard tasks={tasks} />
    </div>
  );
};

export default Page;

