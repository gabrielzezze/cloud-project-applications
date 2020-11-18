import Axios from "axios";
import React from "react";

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
        border: "0.2rem solid black",
        marginBottom: "0.5rem",
        width: "50%",
      }}
    >
      <h3 key={`title-${task.id}`}>{task.title}</h3>
      <h4 key={`status-${task.id}`}>{task.status}</h4>
      <button onClick={() => deleteTask(task.id)}>Deletar</button>
    </div>
  );
}

export default TaskItem;
