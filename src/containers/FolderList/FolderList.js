import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { folderType } from '../../types/types';


class FolderList extends Component {
    render() {
        const { folders } = this.props;
        
        return (
            <div>{folders.map(folder => (
                <p>{folder.name}</p>
            ))}</div>
        );
    };
};

const mapStateToProps = state => ({
    folders: state.folderData,
})

FolderList.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        ...folderType,
        files: PropTypes.arrayOf(folderType)
    }))
}

FolderList.defaultProps = {
    folders: [];
}

export default connect(mapStateToProps, null)(FolderList);