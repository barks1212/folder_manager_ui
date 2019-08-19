import React from 'react';
import PropTypes from 'prop-types';

import { folderDataType } from '../../types/types';

const file = ({ contents }) => (
    <div>
        <ul>
            <li>{contents.type}</li>
            <li>{contents.name}</li>
            <li>{contents.added}</li>

        </ul>
    </div>
);

file.propTypes = {
    contents: PropTypes.shape(folderDataType)
};

export default file;