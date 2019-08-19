import folderData from '../data/folders.json';
import * as actionTypes from './actions';

const initialState = {
    folderData,
    sort: null,
    filter: ''
};

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
        case actionTypes.FILTER_FILES:
            const filteredFiles = folderData.filter(data => data.name.toLowerCase().includes(action.input));
            return {
                ...state,
                folderData: [...filteredFiles],
                filter: action.input
            };
        default:
            return state;
    };
};

export default reducer;