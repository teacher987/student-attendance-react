import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    setResultsPopupStateRequest: ['popupState'],
});

export const AppTypes = Types;
export default Creators;

const INITIAL_STATE = {
    resultsPopup: false,
};










export const setResultsPopupStateRequest = (state = INITIAL_STATE, { popupState }) => {
    return { ...state, resultsPopup: popupState };
}






export const reducer = createReducer(INITIAL_STATE, {
    [AppTypes.SET_RESULTS_POPUP_STATE_REQUEST]: setResultsPopupStateRequest,
});
