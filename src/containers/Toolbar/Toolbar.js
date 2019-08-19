import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import classes from './Toolbar.module.css';
import * as actionTypes from '../../store/actions';

class Toolbar extends Component {
    render() {
        return (
            <header className={classes.Toolbar}>
                some stuff
            </header>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    sortFiles: sort => dispatch({type: actionTypes.SORT_FILES, sort: sort})
});

export default connect(null, mapDispatchToProps)(Toolbar);
