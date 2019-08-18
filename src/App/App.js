import React from 'react';

import Layout from '../HOC/Layout/Layout';
import FolderList from '../containers/FolderList/FolderList';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <FolderList />
            </Layout>
        )
    }
}


export default App;