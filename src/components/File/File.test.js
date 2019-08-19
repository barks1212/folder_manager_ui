import React from 'react';
import { render, cleanup } from '@testing-library/react'

import File from './File';

afterEach(cleanup);

describe('file', () => {
    it('should render', () => {
        const {asFragment} = render(<File />)
        expect(asFragment()).toMatchSnapshot();
    })
})