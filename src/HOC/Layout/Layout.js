import React from 'react';

import classes from './Layout.module.css';

const layout = ({ children }) => (
    <main className={classes.Content}>{children}</main>
);

export default layout;