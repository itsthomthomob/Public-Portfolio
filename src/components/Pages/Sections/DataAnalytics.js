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
function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function DataAnalytics() {
    return (
        <div>
          <Typography variant="h6">
            To do.
          </Typography>
        </div>
    );
  }