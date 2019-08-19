import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './store/reducer';
import App from './App';

afterEach(cleanup);

const store = createStore(reducer);

describe('App', () => {
    it('should render', () => {
        const {asFragment} = render(
        <Provider store={store}>
            <App />
        </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});