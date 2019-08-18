import React from 'react';
import PropTypes from 'prop-types';

import { folderDataType } from '../../types/types';

const file = ({ contents }) => (
    <div>this is a file</div>
);

file.propTypes = {
    contents: PropTypes.shape(folderDataType)
};

export default file;