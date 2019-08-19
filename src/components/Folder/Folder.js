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
        const { contents } = this.props;
        return (
            <div onClick={(e) => this.openFolderHandler(e)}>
                <ul>
                    <li>{contents.type}</li>
                    <li>{contents.name}</li>
                </ul>
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