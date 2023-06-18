import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "../component/Card";
import { AddNew } from "../component/AddNew";

export const Archive = () => {
  const { habitsData } = useData();
  const filterData = habitsData.filter((habit) => habit.archive);
  return (
    <div>
      <h1>Archived Habits</h1>
      <ul className="habits-list">
        {filterData.map((habit) => (
          <li key={habit.id} className="habits-single">
            <Card habit={habit} />
          </li>
        ))}
      </ul>
      <AddNew />
    </div>
  );
};
