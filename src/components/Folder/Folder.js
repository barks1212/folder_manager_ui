import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import { folderDataType } from '../../types/types';
import classes from './Folder.module.css';

import File from '../File/File';


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
        const { open } = this.state

        const subFiles = open ? contents.files.map(file => <File key={file.name} contents={file} />) : null;

        const chevron = open ? <i className={`fa fa-chevron-up ${classes.Chev}`}></i> : <i className={`fa fa-chevron-down ${classes.Chev}`}></i>

        return (
            <Fragment>
                <div data-testid="folderWrapper" className={classes.Folder} onClick={(e) => this.openFolderHandler(e)}>
                    <ul>
                        <li className={classes.Name}>{contents.name}</li>
                        <li>{chevron}</li>
                    </ul>
                </div>
                <div data-testid="subFiles">
                    {subFiles}
                </div>
            </Fragment>
        );
    };
};

Folder.propTypes = {
    contents: PropTypes.shape({
        ...folderDataType,
        files: PropTypes.arrayOf(folderDataType)
    })
};

export default Folder;