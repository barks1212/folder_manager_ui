import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import classes from './Toolbar.module.css';
import * as actionTypes from '../../store/actions';
import {noop} from '../../utils/utils';

class Toolbar extends Component {
    render() {
        const { setSort } = this.props;


        return (
            <header className={classes.Toolbar}>
                <select className={classes.Select} defaultValue="Sort By" placeholder="sort by" onChange={(e) => setSort(e.target.value)}>
                    <option value="Sort By" disabled>Sort by</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                </select>
            </header>
        );
    };
};


const mapDispatchToProps = dispatch => ({
    setSort: sort => dispatch({type: actionTypes.SET_SORT, sort: sort})
});

Toolbar.propTypes = {
    setSort: PropTypes.func
};

Toolbar.defaultProps = {
    setSort: noop
};

export default connect(null, mapDispatchToProps)(Toolbar);
