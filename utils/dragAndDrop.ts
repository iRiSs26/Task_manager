import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const onDragEnd = async (result: DropResult) => {
  const { source, destination } = result;

  if (!destination) return;

  // Update Firestore with new task status
  const taskDocRef = doc(db, 'tasks', result.draggableId);
  await updateDoc(taskDocRef, { status: destination.droppableId });
};
