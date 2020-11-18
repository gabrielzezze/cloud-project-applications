import Axios from "axios";
import React from "react";
import { FaTrashAlt } from 'react-icons/fa'

interface Task {
  title: string;
  status: string;
  id: number;
}

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

function TaskItem(props: Props) {
  const { task, deleteTask } = props;
  return (
    <div
      style={{
        border: "2px solid whitesmoke",
        borderRadius: '17px',
        padding: '2%',
        marginBottom: "0.5rem",
        width: "50%",
        color: 'whitesmoke'
      }}
    >
      <h3 key={`title-${task.id}`}>Titutlo: {task.title}</h3>
      <h5 key={`status-${task.id}`}>Status: {task.status}</h5>
      <FaTrashAlt color={'whitesmoke'} onClick={() => deleteTask(task.id)} style={{ padding: '0.5rem 0', cursor: 'pointer' }} />
    </div>
  );
}

export default TaskItem;
