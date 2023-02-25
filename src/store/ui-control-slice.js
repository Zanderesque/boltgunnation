import { createSlice } from '@reduxjs/toolkit';

const uiControlSlice = createSlice({
    name: 'uiControl',
    initialState: {
        currentPage: 1,
    },
    reducers: {},
});

export const uiControlActions = uiControlSlice.actions;

export default uiControlSlice;
