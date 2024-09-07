"use client";
// components/TaskColumn.tsx

// components/TaskColumn.tsx

import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import TaskModal from './TaskModal';
import {Task} from '../types/types';



interface TaskColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

const TaskColumn = ({ id, title, tasks }: TaskColumnProps) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h2>{title}</h2>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {task.title}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;

