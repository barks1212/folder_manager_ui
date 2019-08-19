import folderData from '../data/folders.json';
import * as actionTypes from './actions';

const initialState = {
    folderData,
    sort: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SORT:
            if (action.sort === 'name') {
                return {
                    ...state,
                    sort: 'name'
                }
            }
            if (action.sort === 'date') {
                return {
                    ...state,
                    sort: 'date'
                };
            }
        case actionTypes.SORT_FILES:
            let sortedState;
            if (action.sort === 'name') {
                sortedState = folderData.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
                return {
                    ...state,
                    sort: action.sort,
                    folderData: sortedState
                };
            };
            break;
        default:
            return state;
    };
};

export default reducer;