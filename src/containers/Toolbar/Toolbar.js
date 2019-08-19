import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';

import classes from './Toolbar.module.css';
import * as actionTypes from '../../store/actions';
import {noop} from '../../utils/utils';

class Toolbar extends Component {
    render() {
        const { setSort, filterFiles } = this.props;

        return (
            <header className={classes.Toolbar}>
                <Dropdown setSort={setSort} />
                <Input filterFiles={filterFiles} />
            </header>
        );
    };
};


const mapDispatchToProps = dispatch => ({
    setSort: sort => dispatch({type: actionTypes.SET_SORT, sort: sort}),
    filterFiles: input => dispatch({type: actionTypes.FILTER_FILES, input: input})
});

Toolbar.propTypes = {
    setSort: PropTypes.func
};

Toolbar.defaultProps = {
    setSort: noop
};

export default connect(null, mapDispatchToProps)(Toolbar);
