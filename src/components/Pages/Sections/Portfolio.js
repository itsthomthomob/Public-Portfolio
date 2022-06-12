import React from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Icons
import CircleIcon from '@mui/icons-material/Circle';

//Images
import InitialDesign from '../../Static/Portfolio/design.PNG'

function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function Portfolio() {
    return (
        <div>
          <Box>
            <Typography variant="h4">
                This Portfolio
            </Typography>
            <Typography variant="h6">
                This portfolio was created in JavaScript using ReactJS, NodeJS, and Gmail API {"(for the Contact tab)"}. I used Material-UI, or MUI, for the UI framework. I originally started with AngularJS, but went back to ReactJS because of how simpler React is. I utilized Restful API to implement the Gmail API in a safe manner. Below is the initial home page design of this portfolio.
            </Typography>
            <Card sx={{ maxWidth: 800, ml: 2, mb: 2 }}>
              <CardMedia component="img" height="600" image={InitialDesign} alt="Store, main view" />
              <CardContent>
              <Typography variant="p" color="text.secondary">
                Initial Design {"(Made in Adobe XD)"}
              </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
    );
  }