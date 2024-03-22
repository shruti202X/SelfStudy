import Accordion from "react-bootstrap/Accordion";
import React, { useState } from "react";

/*
<TaskAccordianItem
  key={index}
  eventKeyValue={task.eventKeyValue}
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
  percentageChangeDurationValue={task.percentageChangeDurationValue}
/>
*/

export default function TaskAccordionAdd(propsInitial) {
  const [props, setProps] = useState({
    eventKeyValue: propsInitial.eventKeyValue,
    taskHeadingValue: "",
    checkedValue: false,
    dueDateValue: "",
    expectedTotalMinutesValue: "30",
    actualTotalMinutesValue: "",
    pointsAssignedValue: "100",
    pointsGotValue: "",
    priorityValue: "medium",
    descriptionValue: "",
    percentageChangeValue: "0",
    percentageChangeDurationValue: "day",
  });
  const handleDeleteClick = () => {
    console.log("clicked delete");
  };
  const handleSaveClick = () => {
    console.log("clicked save");
  };
  const handleHeadingChange = (e) => {
    setProps({ ...props, taskHeadingValue: e.target.value });
  };
  const handleCheckedChange = (e) => {
    setProps({ ...props, checkedValue: e.target.checked });
  };
  const handleDueDateChange = (e) => {
    setProps({ ...props, dueDateValue: e.target.value });
  };
  const handleExpectedMinChange = (e) => {
    setProps({ ...props, expectedTotalMinutesValue: e.target.value });
  };
  const handleActualMinChange = (e) => {
    setProps({ ...props, actualTotalMinutesValue: e.target.value });
  };
  const handlePointsAssignedChange = (e) => {
    setProps({ ...props, pointsAssignedValue: e.target.value });
  };
  const handlePointsGotChange = (e) => {
    setProps({ ...props, pointsGotValue: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setProps({ ...props, descriptionValue: e.target.value });
  };
  const handlePriorityChange = (e) => {
    setProps({ ...props, priorityValue: e.target.value });
  };
  const handlePercentageChangeDuration = (e) => {
    setProps({ ...props, percentageChangeDurationValue: e.target.value });
  };
  const handlePercentageChange = (e) => {
    setProps({ ...props, percentageChangeValue: e.target.value });
  };
  return (
    <Accordion>
      <Accordion.Item eventKey={props.eventKeyValue}>
        <Accordion.Header>
          <input
            type="text"
            value={props.taskHeadingValue}
            onChange={handleHeadingChange}
            placeholder="Enter task heading"
          />
        </Accordion.Header>
        <Accordion.Body>
          Completed ✅
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="checkbox"
            checked={props.checkedValue}
            onChange={handleCheckedChange}
          />
          <br />
          Due Date
          📅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="datetime-local"
            value={props.dueDateValue}
            onChange={handleDueDateChange}
          />{" "}
          <br />
          Expected Total Minutes ⏳ :{" "}
          <input
            type="number"
            value={props.expectedTotalMinutesValue}
            onChange={handleExpectedMinChange}
          />{" "}
          <br />
          Actual Total Minutes⌛ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="number"
            value={props.actualTotalMinutesValue}
            onChange={handleActualMinChange}
          />{" "}
          <br />
          Points Asssigned 💯
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="number"
            value={props.pointsAssignedValue}
            onChange={handlePointsAssignedChange}
          />{" "}
          <br />
          Points got 🌸
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
          {props.pointsGotValue} <br />
          Percentage Change 📈 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={props.percentageChangeValue}
            onChange={handlePercentageChange}
          />
          &nbsp;
          {/** have some changeable value i guess */}
          {props.percentageChangeValue}
          %&nbsp;per&nbsp;
          <select
            value={props.percentageChangeDurationValue}
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
          <select value={props.priorityValue} onChange={handlePriorityChange}>
            <option value="none">None</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <br />
          Description 📝
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <input
            type="text"
            value={props.descriptionValue}
            onChange={handleDescriptionChange}
            placeholder="add description"
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
