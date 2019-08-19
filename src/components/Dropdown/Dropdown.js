import React from 'react';
import PropTypes from 'prop-types';

import {noop} from '../../utils/utils';

const dropdown = ({ setSort }) => (
    <select defaultValue="Sort By" onChange={(e) => setSort(e.target.value)}>
        <option value="Sort By" disabled>Sort by</option>
        <option value="name">Name</option>
        <option value="added">Date</option>
    </select>
);

dropdown.propTypes = {
    setSort: PropTypes.func
};

dropdown.defaultProps = {
    setSort: noop
};

export default dropdown;