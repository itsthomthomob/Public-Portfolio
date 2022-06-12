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
import Link from '@mui/material/Link';

// Icons
import CircleIcon from '@mui/icons-material/Circle';

// Images
import CSimg1 from '../../Static/ChromeSwitcher/gif1.gif';
import CSimg2 from '../../Static/ChromeSwitcher/img1.jpg';
import CSimg3 from '../../Static/ChromeSwitcher/img2.jpg';
import CSimg4 from '../../Static/ChromeSwitcher/img3.jpg';

function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function ChromeSwitcher() {
    return (
        <div>
          <Box>
            <Typography variant="h4">
                Chrome Switcher {"(Published)"}
            </Typography>
            <Typography variant="h6">
                Chrome Switcher is a parkour-puzzle game allowing the player to utilize an arsenal of parkour abilities {"(such as wall-jumping, zip-lining, climbing, etc.)"} to solve color-switching patterns in order to reach the end of a level.
                The game was published in Early 2021.
            </Typography>
            <Link sx={{mb: 3}} href="https://store.steampowered.com/app/1594560/Chrome_Switcher/" variant="p">
              <Typography variant="h6">
              Steam Page
              </Typography>
            </Link>
            <Typography variant="h6">
                Techstack: Unity and C#
            </Typography>
          </Box>
          <Box sx={{mt: 3}}>
        <Typography variant="h3">
            The Team
        </Typography>
        <List>
          <ListItem>
          {BulletList()}
          <Typography variant="p">
            Myself - Team Manager, Level Designer, Character Creator, Animator
          </Typography>
          </ListItem>
          <ListItem>
          {BulletList()}
          <Typography variant="p">
            "JNH" - Assistant Level Designer
          </Typography>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h4">
            Overall Game Design
        </Typography>
        <List>
          <ListItem>
            <Typography variant="h5">
                Core Pillars
            </Typography>
          </ListItem>
          <ListItem>
            <ListItem>
              {BulletList()}
              <Typography variant="h6">
                  Parkour Abilities - We wanted to give the player freedom of movement to traverse the levels in any means necessary, limited to only the human player. I implemented wall-running, climbing, zip-lining, WASD movement, crouching, and vaulting to help this pillar.
              </Typography>
            </ListItem>
          </ListItem>
            <Typography variant="h6" sx={{ml: 10}}>
            </Typography>
          <ListItem>
            <ListItem>
              {BulletList()}
              <Typography variant="h6">
                  Puzzle Solving - The core gameplay of Chrome Switcher revolved around rotating between color-switching obstacles and figuring out the best pattern to complete the level. I implemented the color-switching ability to help this pillar.
              </Typography>
            </ListItem>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h4">
            Game Feel and Style
        </Typography>
        <Typography variant="h5" sx={{ml: 2}}>
            Character and Cosmetic Designs
        </Typography>
        <Typography variant="h6" sx={{ml: 2}}>
        I created the main character in MakeHuman, exported the rig and used Mixamo for the parkour animations. For the overall feel, I aimed for an 80s Retro style.    
        </Typography>
        <Grid display="flex" sx={{mt: 3, ml: 2, mb: 2}}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                <CardMedia component="img" height="250" image={CSimg1} alt="Store, main view" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    Gameplay - Level 1 Switching Colors
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                <CardMedia component="img" height="250" image={CSimg2} alt="Paella dish" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    Gameplay
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                <CardMedia component="img" height="250" image={CSimg3} alt="Paella dish" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                  Gameplay
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                <CardMedia component="img" height="250" image={CSimg4} alt="Paella dish" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                  Gameplay
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Box>
        </div>
    );
  }