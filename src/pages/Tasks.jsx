import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TaskAccordianItem from "../components/TaskAccordianItem";
import TaskAccordianAdd from "../components/TaskAccordianAdd";

const Tasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([
    {
      eventKeyValue: "0",
      taskHeadingValue: "Watch news",
      checkedValue: false,
      dueDateValue: "2023-04-01T23:55",
      expectedTotalMinutesValue: "30",
      actualTotalMinutesValue: "25",
      pointsAssignedValue: "10",
      pointsGotValue: "5",
      priorityValue: "high",
      descriptionValue: "news is news!!",
      percentageChangeValue: "0",
      percentageChangeDurationValue: "day",
    },
    {
      eventKeyValue: "1",
      taskHeadingValue: "Watch news2",
      checkedValue: true,
      dueDateValue: "2023-04-02T15:00",
      expectedTotalMinutesValue: "32",
      actualTotalMinutesValue: "22",
      pointsAssignedValue: "12",
      pointsGotValue: "2",
      priorityValue: "low",
      descriptionValue: "news is news!!2",
      percentageChangeValue: "10",
      percentageChangeDurationValue: "week",
    },
  ]);

  return (
    <div>
      {tasks.map((task, index) => (
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
      ))}
      <TaskAccordianAdd key={tasks.length} eventKeyValue={tasks.length} />
    </div>
  );
};

export default Tasks;
