import TaskBoard from '../components/TaskBoard';
import { getTasks } from '../utils/taskOperations';
import { Task } from '../types/types'; // Adjust path to where your Task type is defined

// Server component that fetches data
const Page = async () => {
  const tasks = await getTasks();

  return (
    <div>
      <TaskBoard tasks={tasks} />
    </div>
  );
};

export default Page;


