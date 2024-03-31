import React, { useState, useEffect } from "react";
import TaskAccordianItem from "../components/TaskAccordianItem";
import TaskAccordianAdd from "../components/TaskAccordianAdd";
import { supabase } from "../supabase/client";
import { useParams } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { subject_id } = useParams();

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from("Task")
        .select("*")
        .eq("subject_id", subject_id);

      if (error) {
        throw error;
      } else {
        setTasks(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  useEffect(() => {
    console.log("subject_id");
    console.log(subject_id);
    fetchTasks();
  }, [supabase, subject_id]);

  const handleDeleteClick = async (taskId) => {
    try {
      // Perform the delete operation
      const { error } = await supabase
        .from("Task")
        .delete()
        .eq("task_id", taskId);

      if (error) {
        throw error;
      }

      console.log("Task deleted successfully");

      // Update the tasks state to remove the deleted task
      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskAccordianItem
          key={index}
          eventKeyValue={index}
          task={task}
          onDelete={() => handleDeleteClick(task.task_id)}
        />
      ))}
      <TaskAccordianAdd key={tasks.length} eventKeyValue={tasks.length} />
    </div>
  );
};

export default Tasks;
