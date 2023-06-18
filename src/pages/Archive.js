import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "../component/Card";

export const Archive = () => {
  const { habitsData } = useData();
  const filterData = habitsData.filter((habit) => habit.archive);
  return (
    <div>
      <h1>Archive</h1>
      <ul className="habits-list">
        {filterData.map((habit) => (
          <li key={habit.id} className="habits-single">
            <Card habit={habit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
