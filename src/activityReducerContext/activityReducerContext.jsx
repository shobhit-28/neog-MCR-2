/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import { acitivityReducer } from "./activityReducer";
import { types } from "./types";

export const ActivityReducerContext = createContext();

export const ActivityReducerHandler = ({children}) => {
    const {
        ADD_TO_ACTIVITY,
        // ADD_TO_ARCHIVE,
        // DELETE,
        // EDIT
    } = types

    const [isAcitivityModalOpen, setIsAcitivityModalOpen] = useState(false)

    const initialState = {
        activities: [],
        archive: []
    }

    const [state, dispatch] = useReducer(acitivityReducer, initialState)

    const addActivity = (activity) => {
        dispatch({
            type: ADD_TO_ACTIVITY,
            payload: activity
        })
    }

    return (
        <ActivityReducerContext.Provider value={{
            addActivity,
            activities: state?.activities,
            isAcitivityModalOpen,
            setIsAcitivityModalOpen
        }}>
            {children}
        </ActivityReducerContext.Provider>
    )
}