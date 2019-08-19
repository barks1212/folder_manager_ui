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

describe('sort functionality', () => {

    it('should sort by name when name is selected', () => {
        const { container, getAllByTestId } = render (
            <Provider store={store}>
                <App />
            </Provider>);

        const dropdown = container.querySelector('select');
        fireEvent.change(dropdown, {target: {value:'name'}});

        const firstFile = getAllByTestId('file')[0].firstElementChild.firstChild.childNodes[1].textContent;
        const firstFolder = getAllByTestId('folder')[0].firstElementChild.firstChild.childNodes[0].textContent;

        expect(firstFile).toEqual('Cost Centres');
        expect(firstFolder).toEqual('Expenses');
    });

    it('should sort by date when date is selected', () => {
        const { container, getAllByTestId } = render (
            <Provider store={store}>
                <App />
            </Provider>);
            
        const dropdown = container.querySelector('select');
        fireEvent.change(dropdown, {target: {value:'date'}});

        const firstFile = getAllByTestId('file')[0].firstElementChild.firstChild.childNodes[2].textContent;

        expect(firstFile).toEqual('2016-08-12');
    });
});