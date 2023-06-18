import React from "react";
import { useData } from "../context/DataContext";

export const AddNew = () => {
  const { state, dispatch, showAddNew, handleFormValidation } = useData();

  return (
    <div style={{ display: showAddNew ? "block" : "none" }}>
      <h4>New Habit</h4>
      <form onClick={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="habit-name">Name:</label>
          <input
            type="text"
            value={state.name}
            id="habit-name"
            onChange={(e) =>
              dispatch({ type: "NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="flex">
          <div>
            <label htmlFor="repeat">Repeat:</label>
            <select
              id="repeat"
              value={state.repeat}
              onChange={(e) =>
                dispatch({ type: "REPEAT", payload: e.target.value })
              }
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div>
            <label htmlFor="goal">Goal:</label>
            <select
              id="goal"
              value={state.goal}
              onChange={(e) =>
                dispatch({ type: "GOAL", payload: e.target.value })
              }
            >
              <option value="1 times a day">1 times a day</option>
              <option value="2 times a day">2 times a day</option>
              <option value="3 times a day">3 times a day</option>
              <option value="4 times a day">4 times a day</option>
              <option value="5 times a day">5 times a day</option>
              <option value="6 times a day">6 times a day</option>
              <option value="7 times a day">7 times a day</option>
              <option value="8 times a day">8 times a day</option>
              <option value="9 times a day">9 times a day</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeOfDay">Time of Day:</label>
            <select
              id="timeOfDay"
              value={state.timeOfDay}
              onChange={(e) =>
                dispatch({ type: "TIMES_DAY", payload: e.target.value })
              }
            >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Night">Night</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate">Start Day:</label>
            <select
              id="startDate"
              value={state.startDay}
              onChange={(e) =>
                dispatch({ type: "START_DAY", payload: e.target.value })
              }
            >
              <option value="Today">Today</option>
              <option value="Tommorrow">Tommorrow</option>
              <option value="Day after tommorrow">Day after tommorrow</option>
            </select>
          </div>
        </div>

        <div>
          <button onClick={() => dispatch({ type: "EMPTY" })}>Discard</button>
          <button onClick={() => handleFormValidation()}>Save</button>
        </div>
      </form>
    </div>
  );
};
