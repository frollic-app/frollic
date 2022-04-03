import React from 'react';
import Sidebar from './Sidebar.jsx';
import ResultsContainer from './ResultsContainer.jsx';
import { Paper } from '@mui/material';

const MainContainer = () => {
    return (
        <Paper id="main-container">
            <Sidebar/>
            <ResultsContainer/>
        </Paper>
    )
}
export default MainContainer;