import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "../component/Card";
import { AddNew } from "../component/AddNew";

export const Home = () => {
  const { habitsData, addNewPopHandler } = useData();
  const removeArchivedHabit = habitsData?.filter(
    (habit) => habit.archive !== true
  );
  return (
    <div>
      <h1>Your habits</h1>
      <ul className="habits-list">
        <li onClick={() => addNewPopHandler()} className="habits-new">
          <h2>Create My Own</h2>
        </li>
        {removeArchivedHabit?.map((habit) => (
          <li key={habit.id} className="habits-single">
            <Card habit={habit} />
          </li>
        ))}
      </ul>
      <AddNew />
    </div>
  );
};
