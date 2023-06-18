/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

import { createContext, useReducer, useState } from "react";
import { acitivityReducer } from "./activityReducer";
import { types } from "./types";

export const ActivityReducerContext = createContext();

export const ActivityReducerHandler = ({children}) => {
    const {
        ADD_TO_ACTIVITY,
        ADD_TO_ARCHIVE,
        DELETE,
        EDIT
    } = types

    const [isAcitivityModalOpen, setIsAcitivityModalOpen] = useState(false)
    const [isAcitivityDetailsModalOpen, setIsAcitivityDetailsModalOpen] = useState(false)
    const [isEditAcitivityDetailsModalOpen, setIsEditAcitivityDetailsModalOpen] = useState(false)

    const initialState = {
        activities: [],
        archive: []
    }

    const [state, dispatch] = useReducer(acitivityReducer, initialState)

    const addActivity = (activity) => {
        dispatch({
            type: ADD_TO_ACTIVITY,
            payload: {data: activity, id: uuidv4()}
        })
    }
    
    const editActivity = (activity) => {
        dispatch({
            type: EDIT,
            payload: activity
        })
    }
    
    const deleteActivity = (activity) => {
        dispatch({
            type: DELETE,
            payload: activity
        })
    }
    
    const addToArchive = (activity) => {
        dispatch({
            type: ADD_TO_ARCHIVE,
            payload: activity
        })
    }

    return (
        <ActivityReducerContext.Provider value={{
            addActivity,
            editActivity,
            deleteActivity,
            addToArchive,
            activities: state?.activities,
            archive: state?.archive,
            isAcitivityModalOpen,
            setIsAcitivityModalOpen,
            isAcitivityDetailsModalOpen,
            setIsAcitivityDetailsModalOpen,
            isEditAcitivityDetailsModalOpen,
            setIsEditAcitivityDetailsModalOpen
        }}>
            {children}
        </ActivityReducerContext.Provider>
    )
}