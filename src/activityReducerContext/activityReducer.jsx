import { types } from "./types"

export const acitivityReducer = (state, action) => {
    const {
        ADD_TO_ACTIVITY,
        ADD_TO_ARCHIVE,
        DELETE,
        EDIT
    } = types

    switch (action.type) {
        case ADD_TO_ACTIVITY:
            if (action.payload.data.name === '') {
                alert("Name is necessary")
                return (state)
            } else {
                return ({
                    ...state,
                    activities: [...state.activities, { ...action.payload.data, id: action.payload.id }]
                })
            }

        case EDIT:
            return ({
                ...state,
                activities: [
                    ...state.activities.filter((activity) => activity.id !== action.payload.id),
                    action.payload
                ]
            })

        case DELETE:
            return ({
                ...state,
                activities: [
                    ...state.activities.filter((activity) => activity.id !== action.payload.id),
                ],
                archive: [
                    ...state.archive.filter((activity) => activity.id !== action.payload.id),
                ]
            })

        case ADD_TO_ARCHIVE:
            return ({
                ...state,
                activities: [
                    ...state.activities.filter((activity) => activity.id !== action.payload.id),
                ],
                archive: [...state.archive, action.payload]
            })

        default:
            break;
    }

}