import React from 'react';
import PropTypes from 'prop-types';

import folderDataType from '../../types/types';

const folder = ({ contents }) => (
    <div>
        this is a folder
    </div>
);

folder.propTypes = {
    contents: PropTypes.shape({
        ...folderDataType,
        files: PropTypes.arrayOf(folderDataType)
    })
};

export default folder;