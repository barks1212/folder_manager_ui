import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react'

import Toolbar from './Toolbar';
import reducer from '../../store/reducer';

const store = createStore(reducer);

afterEach(cleanup);

describe('Toolbar', () => {
    it('should render', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <Toolbar />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    })
});
