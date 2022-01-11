import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "D-r Appointment",
      day: "Feb 5th at 2:30om",
      reminder: true,
    },
    {
      id: 2,
      text: "Football Match",
      day: "Feb 7th at 9:00om",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 10th at 8:30om",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
