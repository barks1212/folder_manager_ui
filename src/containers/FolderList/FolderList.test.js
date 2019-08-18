import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react'

import FolderList from './FolderList';
import reducer from '../../store/reducer';

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
})