import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function HomeHeader() {

    const navigate = useNavigate();
    
    function onHomeClick()
    {
        navigate("/");
    }
    function onExperienceClick()
    {
        navigate("/Experience");
    }
    function onContactClick()
    {
        navigate("/Contact");
    }
    const onProjectsClick = (e) => {
        navigate("/Projects");
     }
    return (
        <div>
            <AppBar style={{zIndex:1301}} position="relative" sx={{borderBottom: 1 }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
                        Thomas O'Brien
                    </Typography>
                    <Button variant="text" onClick={onHomeClick} sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                    </Button>
                    <Button variant="text" onClick={onProjectsClick} sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Projects
                        </Typography>
                    </Button>
                    <Button variant="text" onClick={onExperienceClick} sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Experience
                        </Typography>
                    </Button>
                    <Button variant="text" onClick={onContactClick} sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Contact
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}