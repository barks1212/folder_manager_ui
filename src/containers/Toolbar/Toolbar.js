import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import classes from './Toolbar.module.css';
import * as actionTypes from '../../store/actions';

class Toolbar extends Component {
    render() {
        return (
            <header className={classes.Toolbar}>
                <select className={classes.Select} placeholder="sort by">
                    <option value="" selected disabled hidden>Sort by</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                </select>
            </header>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    sortFiles: sort => dispatch({type: actionTypes.SORT_FILES, sort: sort})
});

export default connect(null, mapDispatchToProps)(Toolbar);
