import React from 'react';
import { render, cleanup } from '@testing-library/react'

import File from './File';

afterEach(cleanup);

describe('file', () => {
    const mockContents = {
        type: 'pdf',
        name: 'test',
        added: '2017-01-06'
    }

    it('should render', () => {
        const {asFragment} = render(<File contents={mockContents}/>)
        expect(asFragment()).toMatchSnapshot();
    })
})