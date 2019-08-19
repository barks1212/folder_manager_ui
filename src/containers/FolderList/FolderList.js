import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';

import { folderDataType } from '../../types/types';
import classes from './FolderList.module.css';
import * as actionTypes from '../../store/actions';

import Folder from '../../components/Folder/Folder';
import File from '../../components/File/File';


class FolderList extends Component {

    componentDidUpdate(prevProps) {
            if (!isEqual(prevProps.sort, this.props.sort)) {
                this.props.sortFiles(this.props.sort)
            };
    };

    render() {
        const { data } = this.props;

        const renderFileOrFolder = data.map(contents => (
            contents.type === 'folder' ?
             <Fragment>
                <div key={contents.name} data-testid="folder">
                    <Folder contents={contents}/>
                </div>
            </Fragment> :
            <Fragment>
                <div key={contents.name} data-testid="file">
                    <File contents={contents} />
                </div>
            </Fragment>
        ));

        return (
            <div className={classes.FolderList}>
                {renderFileOrFolder}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    data: state.folderData,
    sort: state.sort
});

const mapDispatchToProps = dispatch => ({
    sortFiles: sort => dispatch({type: actionTypes.SORT_FILES, sort: sort})
});

FolderList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        ...folderDataType,
        files: PropTypes.arrayOf(folderDataType)
    }))
};

FolderList.defaultProps = {
    data: []
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderList);