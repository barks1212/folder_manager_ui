import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { folderDataType } from '../../types/types';

import Folder from '../../components/Folder/Folder';
import File from '../../components/File/File';


class FolderList extends Component {
    render() {
        const { folders } = this.props;

        const renderFileOrFolder = folders.map(contents => (
            contents.type === 'folder' ? <Folder contents={contents}/> : <File contents={contents} />
        ));
        
        return (
            <div>
                {renderFileOrFolder}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    folders: state.folderData,
})

FolderList.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        ...folderDataType,
        files: PropTypes.arrayOf(folderDataType)
    }))
};

FolderList.defaultProps = {
    folders: []
};

export default connect(mapStateToProps, null)(FolderList);