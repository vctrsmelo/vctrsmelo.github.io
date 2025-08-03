import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, Apps } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default () => {
    const location = useLocation();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        switch (location.pathname) {
        case '/':
            setValue(0);
            break;
        case '/portfolio':
            setValue(1);
            break;
        default:
            setValue(0);
        }
    }, [location.pathname]);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<Home />} href="/#/home"/>
                <BottomNavigationAction label="Portfolio" icon={<Apps />} href="/#/portfolio"/>
            </BottomNavigation>
        </Paper>
    );
}
