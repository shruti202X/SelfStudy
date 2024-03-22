import Accordion from "react-bootstrap/Accordion";
import React, { useState } from "react";
import { supabase } from "../supabase/client";

/*
<TaskAccordianItem
  key={index}
  taskHeadingValue={task.taskHeadingValue}
  checkedValue={task.checkedValue}
  dueDateValue={task.dueDateValue}
  expectedTotalMinutesValue={task.expectedTotalMinutesValue}
  actualTotalMinutesValue={task.actualTotalMinutesValue}
  pointsAssignedValue={task.pointsAssignedValue}
  pointsGotValue={task.pointsGotValue}
  priorityValue={task.priorityValue}
  descriptionValue={task.descriptionValue}
  percentageChangeValue={task.percentageChangeValue}
/>
*/

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
    //calculate points got
    //change subjects points got and points assigned
    //or add triggers;
    try {
      // Make your modifications to the task object here
      // For example, let's update the task name

      const { error } = await supabase
        .from("Task")
        .update(task)
        .eq("task_id", task.task_id); // Update the task with the modified data

      if (error) {
        throw error;
      }
      console.log("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
    console.log("trying to save");
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
    const priorityString = event.target.value;
    const priorityValue = Object.keys(priority_map).find(
      (key) => priority_map[key] === priorityString,
    );
    setTask({ ...task, priority: priorityValue });
  };
  const handlePercentageChangeDuration = (e) => {
    const percentageDurationString = event.target.value;
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
            value={task.points_asigned}
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
