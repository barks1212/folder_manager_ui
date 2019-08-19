import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

import Input from './Input';

describe('input', () => {

    it('should render', () => {
        const filterFilesMock = jest.fn();

        const {asFragment} = render(<Input filterFiles={filterFilesMock}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should have "Filename..." as a placeholder', () => {
        const filterFilesMock = jest.fn();

        const {container} = render(<Input filterFiles={filterFilesMock} />);
        const input = container.querySelector('input');

        expect(input.placeholder).toBe('Filename...');
    });

    it('should change value on user input', () => {
        const filterFilesMock = jest.fn();

        const {container} = render(<Input filterFiles={filterFilesMock} />);
        const input = container.querySelector('input');

        fireEvent.change(input, {target: {value: 'test'}});

        expect(input.value).toBe('test');
    });

    it('should call filter function on user input', () => {
        const filterFilesMock = jest.fn();

        const {container} = render(<Input filterFiles={filterFilesMock} />);
        const input = container.querySelector('input');

        fireEvent.change(input, {target: {value: 't'}});

        expect(filterFilesMock).toHaveBeenCalled();
    });
});