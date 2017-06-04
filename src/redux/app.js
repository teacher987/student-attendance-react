import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    setResultsPopupStateRequest: ['popupState'],
    setMultiSelectStateRequest: ['multiSelect'],
});

export const AppTypes = Types;
export default Creators;

const INITIAL_STATE = {
    resultsPopup: false,
    multiSelect: false,
};










export const setResultsPopupStateRequest = (state = INITIAL_STATE, { popupState }) => {
    return { ...state, resultsPopup: popupState };
};

export const setMultiSelectStateRequest = (state = INITIAL_STATE, { multiSelect = true }) => {
    return { ...state, multiSelect }
};






export const reducer = createReducer(INITIAL_STATE, {
    [AppTypes.SET_RESULTS_POPUP_STATE_REQUEST]: setResultsPopupStateRequest,
    [AppTypes.SET_MULTI_SELECT_STATE_REQUEST]: setMultiSelectStateRequest,
});
