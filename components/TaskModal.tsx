import { useState } from 'react';
import { addTask } from '../utils/taskOperations'; // Correct import for adding tasks

const TaskModal = ({ close }: { close: () => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('TODO');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      date,
      priority
    };
    await addTask(newTask); // Use addTask instead of getTasks
    close();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="TODO">TODO</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskModal;
