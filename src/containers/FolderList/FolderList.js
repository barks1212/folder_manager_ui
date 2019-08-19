import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { folderDataType } from '../../types/types';

import Folder from '../../components/Folder/Folder';
import File from '../../components/File/File';


class FolderList extends Component {
    state = {
        open: false
    }
   

    

    clickHandler(event, open, fileName) {
        event.preventDefault();
        this.setState({open: !open})

        
    };

    render() {
        const { data } = this.props;

        const renderFileOrFolder = data.map(contents => (
            contents.type === 'folder' ?
             <Fragment>
                <div data-testid="folder">
                    <Folder key={contents.name} contents={contents}/>
                </div>
            </Fragment> :
            <Fragment>
                <div data-testid="file">
                    <File key={contents.name} contents={contents} />
                </div>
            </Fragment>
        ));

        return (
            <div>
                {renderFileOrFolder}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    data: state.folderData,
})

FolderList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        ...folderDataType,
        files: PropTypes.arrayOf(folderDataType)
    }))
};

FolderList.defaultProps = {
    data: []
};

export default connect(mapStateToProps, null)(FolderList);