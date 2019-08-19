import React from 'react';
import PropTypes from 'prop-types';

import {noop} from '../../utils/utils';
import classes from './Input.module.css';

const input = ({ filterFiles }) => (
    <div className={classes.InputWrapper}>
        <i className="fa fa-search" />
        <input placeholder='Filename...' onChange={filterFiles} />
    </div>
);

input.propTypes = {
    filterFiles: PropTypes.func
};

input.defaultProps = {
    filterFiles: noop
};

export default input;