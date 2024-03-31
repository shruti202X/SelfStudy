import Accordion from "react-bootstrap/Accordion";
import React, { useState } from "react";
import { supabase } from "../supabase/client";

export default function TaskAccordionItem(propsInitial) {
  const [task, setTask] = useState(propsInitial.task);

  const priority_map = {
    0: "none",
    1: "low",
    2: "medium",
    3: "high",
  };

  const percentage_duration_map = {
    0: "none",
    1: "hour",
    2: "day",
    3: "week",
  };

  const handleDeleteClick = () => {
    console.log("clicked delete");
  };
  const handleSaveClick = async () => {
    try {
      let pointsGot = 0;
      if (task.checked && task.due_at.trim() !== "") {
        if (task.percentage_duration === 0) {
          pointsGot = task.points_assigned;
        } else {
          const currentTime = new Date();
          const dueDateTime = new Date(task.due_at);
          const timeDifference = dueDateTime - currentTime;

          let durationInHours;
          switch (task.percentage_duration) {
            case 1: // Hour
              durationInHours = timeDifference / (1000 * 60 * 60);
              break;
            case 2: // Day
              durationInHours = timeDifference / (1000 * 60 * 60 * 24);
              break;
            case 3: // Week
              durationInHours = timeDifference / (1000 * 60 * 60 * 24 * 7);
              break;
            default:
              break;
          }

          if (durationInHours < 0) {
            durationInHours = -durationInHours;
            pointsGot =
              task.points_assigned - durationInHours * task.percentage_dec;
          } else {
            pointsGot =
              task.points_assigned + durationInHours * task.percentage_dec;
          }
        }
      }

      pointsGot = Math.round(pointsGot);

      // Update points_got in task object
      setTask({ ...task, points_got: pointsGot });

      const updatedTask = {
        ...task,
        points_got: pointsGot,
      };

      if (task.due_at.trim() === "") {
        updatedTask.due_at = null;
      }

      // Update task in the database
      const { error } = await supabase
        .from("Task")
        .update(updatedTask)
        .eq("task_id", task.task_id);

      if (error) {
        throw error;
      }

      console.log("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };
  const handleCheckedChange = (e) => {
    setTask({ ...task, checked: e.target.checked });
  };
  const handleDueDateChange = (e) => {
    setTask({ ...task, due_at: e.target.value });
  };
  const handleExpectedMinChange = (e) => {
    setTask({ ...task, expected_total_min: e.target.value });
  };
  const handleActualMinChange = (e) => {
    setTask({ ...task, actual_total_min: e.target.value });
  };
  const handlePointsAssignedChange = (e) => {
    setTask({ ...task, points_assigned: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setTask({ ...task, description: e.target.value });
  };
  const handlePriorityChange = (e) => {
    const priorityString = e.target.value;
    const priorityValue = Object.keys(priority_map).find(
      (key) => priority_map[key] === priorityString,
    );
    setTask({ ...task, priority: priorityValue });
  };
  const handlePercentageChangeDuration = (e) => {
    const percentageDurationString = e.target.value;
    const percentageDurationValue = Object.keys(percentage_duration_map).find(
      (key) => percentage_duration_map[key] === percentageDurationString,
    );
    setTask({ ...task, percentage_duration: percentageDurationValue });
  };
  const handlePercentageChange = (e) => {
    setTask({ ...task, percentage_dec: e.target.value });
  };
  return (
    <Accordion>
      <Accordion.Item eventKey={propsInitial.eventKeyValue}>
        <Accordion.Header>
          <b>{task.name}</b>
        </Accordion.Header>
        <Accordion.Body>
          Completed ✅
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="checkbox"
            checked={task.checked}
            onChange={handleCheckedChange}
          />
          <br />
          Due Date
          📅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="datetime-local"
            value={task.due_at}
            onChange={handleDueDateChange}
          />{" "}
          <br />
          Expected Total Minutes ⏳ :{" "}
          <input
            type="number"
            value={task.expected_total_min}
            onChange={handleExpectedMinChange}
          />{" "}
          <br />
          Actual Total Minutes⌛ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="number"
            value={task.actual_total_min}
            onChange={handleActualMinChange}
          />{" "}
          <br />
          Points Asssigned 💯
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="number"
            value={task.points_assigned}
            onChange={handlePointsAssignedChange}
          />{" "}
          <br />
          Points got 🌸
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
          {task.points_got} <br />
          Percentage Change 📈 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={task.percetage_dec}
            onChange={handlePercentageChange}
          />
          &nbsp;
          {/** have some changeable value i guess */}
          {task.percentage_dec}
          %&nbsp;per&nbsp;
          <select
            value={percentage_duration_map[task.percentage_duration]}
            onChange={handlePercentageChangeDuration}
          >
            <option value="none">None</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
          </select>
          <br />
          Priority 🐯
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <select
            value={priority_map[task.priority]}
            onChange={handlePriorityChange}
          >
            <option value="none">None</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <br />
          Description 📝
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="text"
            value={task.description}
            onChange={handleDescriptionChange}
          />{" "}
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="button" value="DELETE" onClick={handleDeleteClick} />
            <input type="button" value="SAVE" onClick={handleSaveClick} />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
