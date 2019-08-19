import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react'

import FolderList from './FolderList';
import reducer from '../../store/reducer';
import data from '../../data/folders.json';

const store = createStore(reducer)

afterEach(cleanup);

describe('folderList', () => {
    it('should render', () => {
        const {asFragment} = render(
        <Provider store={store}>
            <FolderList />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders a list of files and folders', () => {
        const {getAllByTestId} = render(
        <Provider store={store}>
            <FolderList />)
        </Provider>
        );
        const files = getAllByTestId('file').map(f => f.firstElementChild.firstChild.childNodes[1].textContent);
        const folders = getAllByTestId('folder').map(f => f.firstElementChild.firstChild.childNodes[0].textContent);

        const filesToMatch = data.filter(el => el.type !== 'folder').map(f => f.name);
        const foldersToMatch = data.filter(el => el.type === 'folder').map(f => f.name);

        expect(files).toEqual(filesToMatch);
        expect(folders).toEqual(foldersToMatch);
    });
});