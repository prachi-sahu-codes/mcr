import React from "react";
import { useData } from "../context/DataContext";

export const Card = ({ habit }) => {
  const { editHandler, deleteHabitHandler, archiveHabitHandler } = useData();
  return (
    <div>
      <h2>{habit.name}</h2>
      <p>{habit.repeat}</p>
      <p>{habit.goal}</p>
      <p>{habit.timeOfDay}</p>
      <p>{habit.startDay}</p>
      <button onClick={() => editHandler(habit.id)}>Edit</button>
      <button onClick={() => deleteHabitHandler(habit.id)}>Delete</button>
      <button onClick={() => archiveHabitHandler(habit.id)}>
        {habit.archive ? "UnArchive" : "Archive"}
      </button>
    </div>
  );
};
