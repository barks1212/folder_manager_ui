import React, {Fragment} from 'react';

import Toolbar from '../../containers/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = ({ children }) => (  
    <Fragment>
        <Toolbar />
        <main className={classes.Content}>{children}</main>
    </Fragment>
);

export default layout;