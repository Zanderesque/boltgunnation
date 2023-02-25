import { createSlice } from '@reduxjs/toolkit';

const HOME = 1;

const uiControlSlice = createSlice({
    name: 'uiControl',
    initialState: {
        currentPage: HOME,
    },
    reducers: {
        setCurrentPage(state, action) {
            return {
                ...state,
                currentPage: action.payload,
            };
        },
    },
});

export const uiControlActions = uiControlSlice.actions;

export default uiControlSlice;
