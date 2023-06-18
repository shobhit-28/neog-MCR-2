import { types } from "./types"

export const acitivityReducer = (state, action) => {
    const {
        ADD_TO_ACTIVITY,
        // ADD_TO_ARCHIVE,
        // DELETE,
        // EDIT
    } = types

    switch (action.type) {
        case ADD_TO_ACTIVITY:
            return({
                ...state,
                activities: [...state.activities, action.payload]
            })
    
        default:
            break;
    }

}