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

// Images
import TRimg1 from '../../Static/TilemapRoyale/Tilemap_Royale_MainMenuStore.png'
import TRimg2 from '../../Static/TilemapRoyale/Tilemap_Royale_MainMenuSettings.png'
import TRimg3 from '../../Static/TilemapRoyale/Tilemap_Royale_MainMenuoutfits.png'
import TRimg4 from '../../Static/TilemapRoyale/Tilemap_Royale_MainMenuexit.png'
import TRimg5 from '../../Static/TilemapRoyale/Tilemap_Royale_MainMenuStore.png'

function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function TilemapRoyale() {
  return (
    <div>
      <Box>
        <Typography variant="h4">
            Tilemap Royale {"(Unpublished)"}
        </Typography>
        <Typography variant="h6">
            Tilemap Royale is a 100-player free for all where every game is procedurally generated. The map itself is a spherical planet, similar in style to Super Mario Galaxy, except the terrain and buildings are procedurally generated. The game is still in development, but currently paused.
        </Typography>
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
            Myself - Director, Lead Developer, UI Designer, Character Designer
          </Typography>
          </ListItem>
          <ListItem>
          {BulletList()}
          <Typography variant="p">
            "Casper" - Programmer
          </Typography>
          </ListItem>
          <ListItem>
          {BulletList()}
          <Typography variant="p">
            "Venom" - Animator
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
                  New Experiences
              </Typography>
            </ListItem>
          </ListItem>
            <Typography variant="h6" sx={{ml: 10}}>
            - For every game every player is in, we wish to provide a unique experience. We accomplish this through procedural generation, generating the terrain, the natural structures, and the loot in different places everytime.
            </Typography>
          <ListItem>
            <ListItem>
              {BulletList()}
              <Typography variant="h6">
                  End-game Mayham
              </Typography>
            </ListItem>
          </ListItem>
          <Typography variant="h6" sx={{ml: 10}}>
            - Making the end-game really fun and complex is what will help separate this game from other royales, as other royale games only provide players luck-based inventories. Whether through looting houses or killing players, it's entirely luck based. A skill system will be implemented, players level up their skills depending on their actions. Their skills reset every game.
          </Typography>
          <ListItem>
            <ListItem>
              {BulletList()}
              <Typography variant="h6">
                  Uniqueness {"(From other Royale games)"}
              </Typography>
            </ListItem>
          </ListItem>
          <Typography variant="h6" sx={{ml: 10}}>
            - As a team, we strive to make Tilemap Royale very different from regular battle-royale games. Whether through the different, wacky weapons to the complex terrain generation. We strive to provide players unique experiences without being repetitive.
          </Typography>
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
            The character was modeled, rigged, and animated in Blender 3D by myself. Venom, our animator, made all the animation variants. As mentioned above, I also designed the UI. I kept a consistent feeling of interactivity and fun {"(using blue and orange),"} for the UI design.
        </Typography>
        <Grid display="flex" sx={{mt: 3, ml: 2}}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 700, ml: 2 }}>
                <CardMedia component="img" height="250" image={TRimg1} alt="Store, main view" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    Store - Main View
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 700, ml: 2 }}>
                <CardMedia component="img" height="250" image={TRimg2} alt="Paella dish" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    Settings
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 700, ml: 2 }}>
                <CardMedia component="img" height="250" image={TRimg3} alt="Paella dish" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    Outfits
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 700, ml: 2 }}>
                <CardMedia component="img" height="250" image={TRimg4} alt="Paella dish" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    Main Menu - Exit Popup
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Box>
    </div>
  );
}
