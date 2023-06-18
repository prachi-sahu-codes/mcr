import { createContext, useReducer, useState } from "react";
import { data } from "../backend/data";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [habitsData, setHabitsData] = useState(data);
  const [showAddNew, setShowAddNew] = useState(false);

  const addNewPopHandler = () => setShowAddNew(() => !showAddNew);

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "REPEAT":
        return { ...state, repeat: action.payload };
      case "GOAL":
        return { ...state, goal: action.payload };
      case "TIMES_DAY":
        return { ...state, timeOfDay: action.payload };
      case "START_DAY":
        return { ...state, startDay: action.payload };
      case "EDIT_HABIT":
        const findHabit = habitsData.find(
          (habit) => habit.id === action.payload
        );
        setShowAddNew(() => !showAddNew);

        return {
          name: findHabit.name,
          repeat: findHabit.repeat,
          goal: findHabit.goal,
          timeOfDay: findHabit.timeOfDay,
          startDay: findHabit.startDay,
        };
      case "EMPTY":
        setShowAddNew(() => !showAddNew);
        return {
          name: "",
          repeat: "",
          goal: "",
          timeOfDay: "",
          startDay: "",
        };
      default:
        console.log("something is wrong");
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    name: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDay: "",
  });

  const saveHandler = () => {
    const newHabit = { ...state, id: uuidv4(), archive: false };
    setHabitsData((h) => [...h, newHabit]);
    dispatch({ type: "EMPTY" });
  };

  const handleFormValidation = () => {
    if (
      state.name !== "" &&
      state.repeat !== "" &&
      state.goal !== "" &&
      state.timeOfDay !== "" &&
      state.startDay !== ""
    ) {
      saveHandler();
    } else {
      alert("Please fill all the fields!");
    }
  };

  //handling single habit

  const editHandler = (selectedId) => {
    dispatch({ type: "EDIT_HABIT", payload: selectedId });

    const findHabit = habitsData.find((habit) => habit.id === selectedId);

    const findHabitIndex = habitsData.findIndex(
      (habit) => habit.id === selectedId
    );
    console.log(state);

    setHabitsData((h) => [
      ...h.slice(0, findHabitIndex),
      findHabit,
      ...h.slice(findHabitIndex + 1),
    ]);
  };

  const deleteHabitHandler = (selectedId) => {
    const updatedData = habitsData.filter((habit) => habit.id !== selectedId);
    setHabitsData(() => updatedData);
  };

  const archiveHabitHandler = (selectedId) => {
    const updatedData = habitsData.map((habit) =>
      habit.id === selectedId ? { ...habit, archive: !habit.archive } : habit
    );
    setHabitsData(() => updatedData);
  };

  return (
    <DataContext.Provider
      value={{
        habitsData,
        setHabitsData,
        showAddNew,
        setShowAddNew,
        addNewPopHandler,
        state,
        dispatch,
        editHandler,
        saveHandler,
        handleFormValidation,
        deleteHabitHandler,
        archiveHabitHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
