import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

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
    });

    it('should not render a list of subfiles when not clicked', () => {
        const {getByTestId} = render(<Folder contents={mockContents}/>)
        const subFiles = getByTestId('subFiles');

        expect(subFiles.textContent).toHaveLength(0);
    });

    it('should render a list of files when clicked', () => {
        const {getByTestId} = render(<Folder contents={mockContents}/>)
        fireEvent.click(getByTestId('folderWrapper'));

        const subFiles = getByTestId('subFiles');
        const match = subFiles.firstElementChild.firstChild.childNodes[1].textContent;

        expect(match).toEqual(mockContents.files[0].name)
    });

    it('should remove list of subfiles when clicked again', () => {
        const {getByTestId} = render(<Folder contents={mockContents}/>)
        fireEvent.click(getByTestId('folderWrapper'));
        fireEvent.click(getByTestId('folderWrapper'));
        
        const subFiles = getByTestId('subFiles');

        expect(subFiles.textContent).toHaveLength(0);        
    });
});