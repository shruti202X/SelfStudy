import React, { useState, useEffect } from "react";
import TaskAccordianItem from "../components/TaskAccordianItem";
import TaskAccordianAdd from "../components/TaskAccordianAdd";
import { supabase } from "../supabase/client";
import { useParams } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { subject_id } = useParams();

  useEffect(() => {
    console.log("subject_id");
    console.log(subject_id);
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

    fetchTasks();
  }, [supabase, subject_id]);

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskAccordianItem key={index} eventKeyValue={index} task={task} />
      ))}
      <TaskAccordianAdd key={tasks.length} eventKeyValue={tasks.length} />
    </div>
  );
};

export default Tasks;
