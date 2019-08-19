import folderData from '../data/folders.json';
import * as actionTypes from './actions';

const initialState = {
    folderData,
    sort: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SORT:
                return {
                    ...state,
                    sort: action.sort
                };
        case actionTypes.SORT_FILES:
            const sortedFiles = folderData.sort((a, b) => (a[action.sort] < b[action.sort] ? -1 : 1));

            return {
                ...state,
                folderData: [...sortedFiles]
            };
        default:
            return state;
    };
};

export default reducer;