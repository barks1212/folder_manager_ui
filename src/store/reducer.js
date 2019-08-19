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
            break;
        case actionTypes.SORT_FILES:
            let sortedState = [];
            if (action.sort === 'name') {
                sortedState = folderData.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
                return {
                    ...state,
                    folderData: [...sortedState]
                };
            };
            if (action.sort === 'date') {
                sortedState = folderData.sort((a, b) => {
                    if (a.added < b.added) return -1;
                    if (a.added > b.added) return 1;
                    return 0;
            });
            return {
                ...state,
                folderData: [...sortedState]
            };
        };
            break;
        default:
            return state;
    };
};

export default reducer;