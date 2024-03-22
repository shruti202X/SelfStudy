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
        <TaskAccordianItem
          key={index}
          eventKeyValue={index}
          taskHeadingValue={task.name}
          checkedValue={task.checked}
          dueDateValue={task.due_at}
          expectedTotalMinutesValue={task.expected_total_min}
          actualTotalMinutesValue={task.actual_total_min}
          pointsAssignedValue={task.points_assigned}
          pointsGotValue={task.points_got}
          priorityValue={task.priority}
          descriptionValue={task.description}
          percentageChangeValue={task.percentage_dec}
          percentageChangeDurationValue={task.percentage_duration}
        />
      ))}
      <TaskAccordianAdd key={tasks.length} eventKeyValue={tasks.length} />
    </div>
  );
};

export default Tasks;
