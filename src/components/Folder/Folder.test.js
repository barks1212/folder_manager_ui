import React from 'react';
import { render, cleanup } from '@testing-library/react'

import Folder from './Folder';

afterEach(cleanup);

describe('folder', () => {
    const mockContents = {
        type: 'folder',
        name: 'test',
        files: [
            {
                type: 'doc', 
                name: 'testFile',
                added: '2017-05-02'
            }
        ]
    }

    it('should render', () => {
        const {asFragment} = render(<Folder contents={mockContents}/>)
        expect(asFragment()).toMatchSnapshot();
    })
})