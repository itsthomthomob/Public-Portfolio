import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Footer() {
    return (
        <div>
            <Box sx={{height: 100, width: 1/1, backgroundColor: '#141414', pt: 1}}>
                <Typography sx={{mt: 1}} variant="p" component="div" align="center">
                        Copyright © Thomas O'Brien
                </Typography>
            </Box>
        </div>
    );
}