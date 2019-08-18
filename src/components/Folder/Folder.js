import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { folderDataType } from '../../types/types';


class Folder extends Component {
    state = {
        open: false
    };

    openFolderHandler (e) {
        e.preventDefault();
        this.setState((prevState) => ({open: !prevState.open}));
    };
    
    render () {
        return (
            <div onClick={(e) => this.openFolderHandler(e)}>
                this is a folder
            </div>
        )
    }
};

Folder.propTypes = {
    contents: PropTypes.shape({
        ...folderDataType,
        files: PropTypes.arrayOf(folderDataType)
    })
};

export default Folder;