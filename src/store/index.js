import { configureStore } from '@reduxjs/toolkit';

// import slices
import uiControlSlice from './ui-control-slice';

// import actions
import { uiControlActions } from './ui-control-slice';

const store = configureStore({
    reducer: {
        uiControl: uiControlSlice.reducer,
    },
    // use this to modify the serializable errors we are seeing displayed
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                // ignoredActions: ['repData/setRep', 'rawData/initLeadData', 'rawData/addLead'],
                // Ignore these field paths in all actions (these are examples)
                // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                // ignoredPaths: ['repData.rep', 'rawData.leads.byId'],
            },
        }),
});

export const actions = {
    uiControl: uiControlActions,
};

export default store;
