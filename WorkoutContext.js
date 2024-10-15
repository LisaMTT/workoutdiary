import React, { createContext, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [unit, setUnit] = useState('km'); //default unit

    return (
        <WorkoutContext.Provider value={{ workouts, setWorkouts, unit, setUnit }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContext;
