import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

import Dropdown from './Dropdown';

afterEach(cleanup);

describe('dropdown', () => {

    it('should render', () => {
        const setSortMock = jest.fn();

        const {asFragment} = render(<Dropdown setSort={setSortMock}/>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call set sort on change value', () => {
        const setSortMock = jest.fn();
        const {container} = render(<Dropdown setSort={setSortMock} />)

        const dropdown = container.querySelector('select');
        fireEvent.change(dropdown, {target: {value:'added'}});

        expect(setSortMock).toHaveBeenCalled();
    });
});