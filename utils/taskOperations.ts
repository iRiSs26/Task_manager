// import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../lib/firebase';
// import { Task } from '../types/types'; // Ensure correct path

// // Function to fetch tasks from Firestore
// export const getTasks = async () => {
//   try {
//     const taskCollectionRef = collection(db, 'tasks');
//     const taskSnapshot = await getDocs(taskCollectionRef);
//     const taskList: Task[] = taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));

//     const tasks = {
//       todo: taskList.filter(task => task.status === 'TODO'),
//       inProgress: taskList.filter(task => task.status === 'IN PROGRESS'),
//       completed: taskList.filter(task => task.status === 'COMPLETED')
//     };

//     return tasks;
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     return { todo: [], inProgress: [], completed: [] };
//   }
// };

// // Function to add a new task to Firestore
// export const addTask = async (task: Omit<Task, 'id'>) => {
//   try {
//     await addDoc(collection(db, 'tasks'), task);
//     console.log('Task added successfully');
//   } catch (error) {
//     console.error('Error adding task:', error);
//   }
// };

// // Function to update the status of a task
// export const updateTaskStatus = async (taskId: string, newStatus: string) => {
//   try {
//     const taskDocRef = doc(db, 'tasks', taskId);
//     await updateDoc(taskDocRef, { status: newStatus });
//     console.log('Task status updated successfully');
//   } catch (error) {
//     console.error('Error updating task status:', error);
//   }
// };

// // Function to delete a task
// export const deleteTask = async (taskId: string) => {
//   try {
//     const taskDocRef = doc(db, 'tasks', taskId);
//     await deleteDoc(taskDocRef);
//     console.log('Task deleted successfully');
//   } catch (error) {
//     console.error('Error deleting task:', error);
//   }
// };
// utils/taskOperations.ts

import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Task } from '../types/types'; // Ensure correct path

// Function to fetch tasks from a given Firestore collection
const getTasksFromCollection = async (collectionName: string) => {
  try {
    const taskCollectionRef = collection(db, collectionName);
    const taskSnapshot = await getDocs(taskCollectionRef);
    return taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
  } catch (error) {
    console.error(`Error fetching tasks from ${collectionName}:`, error);
    return [];
  }
};

// Function to fetch tasks from both collections and combine them
export const getTasks = async () => {
  try {
    // Fetch tasks from both collections
    const tasksFromTask = await getTasksFromCollection('task');
    const tasksFromTaska = await getTasksFromCollection('tasks');

    // Combine tasks from both collections
    const taskList: Task[] = [...tasksFromTask, ...tasksFromTaska];

    // Organize tasks by status
    const tasks = {
      todo: taskList.filter(task => task.status === 'TODO'),
      inProgress: taskList.filter(task => task.status === 'IN PROGRESS'),
      completed: taskList.filter(task => task.status === 'COMPLETED')
    };

    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return { todo: [], inProgress: [], completed: [] };
  }
};

// Function to add a new task to Firestore
export const addTask = async (task: Omit<Task, 'id'>) => {
  try {
    // Add task to both collections
    // await addDoc(collection(db, 'task'), task);
    await addDoc(collection(db, 'tasks'), task);
    console.log('Task added successfully');
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

// Function to update the status of a task
export const updateTaskStatus = async (taskId: string, newStatus: string) => {
  try {
    // Update task status in both collections
    

    const taskaDocRef = doc(db, 'tasks', taskId);
    await updateDoc(taskaDocRef, { status: newStatus });

    console.log('Task status updated successfully');
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};

// Function to delete a task
export const deleteTask = async (taskId: string) => {
  try {
    

    const taskaDocRef = doc(db, 'tasks', taskId);
    await deleteDoc(taskaDocRef);

    console.log('Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};


