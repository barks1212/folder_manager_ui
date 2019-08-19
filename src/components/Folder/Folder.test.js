import React from 'react';
import { render, cleanup } from '@testing-library/react'

import Folder from './Folder';

afterEach(cleanup);

describe('folder', () => {
    it('should render', () => {
        const {asFragment} = render(<Folder />)
        expect(asFragment()).toMatchSnapshot();
    })
})