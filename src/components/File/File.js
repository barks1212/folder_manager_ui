import React from 'react';
import PropTypes from 'prop-types';

import classes from './File.module.css';

const file = ({ contents }) => (
    <div className={classes.File}>
        <ul>
            <li>{contents.type}</li>
            <li className={classes.Name}>{contents.name}</li>
            <li>{contents.added}</li>

        </ul>
    </div>
);

file.propTypes = {
    contents: PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        added: PropTypes.string.isRequired,
    })
};

export default file;