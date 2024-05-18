import React from 'react';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgrey' : 'black' }}>
          {task.task}
          <button onClick={() => completeTask(index)}>{task.completed ? 'Desmarcar' : 'Completar'}</button>
          <button onClick={() => deleteTask(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;