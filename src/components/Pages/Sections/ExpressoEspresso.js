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
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Icons
import CircleIcon from '@mui/icons-material/Circle';

import gif1 from '../../Static/ExpressoEspresso/gif1.gif'
import gif2 from '../../Static/ExpressoEspresso/gif2.gif'
import gif3 from '../../Static/ExpressoEspresso/gif3.gif'
import img1 from '../../Static/ExpressoEspresso/img1.jpg'
import img2 from '../../Static/ExpressoEspresso/img2.jpg'

import AI1 from '../../Static/ExpressoEspresso/AI1.png'
import AI2 from '../../Static/ExpressoEspresso/AI2.png'
import AI3 from '../../Static/ExpressoEspresso/AI3.png'
import AIUI from '../../Static/ExpressoEspresso/AIUI.png'

function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function ExpressoEspresso() {
    return (
      <div>
      <Box>
        <Typography variant="h4">
            Expresso Espresso {"(Published)"}
        </Typography>
        <Typography variant="h6">
            Expresso Espresso is a coffee shop management game with an emphasis on ground-up construction, employee management, and economic management. I started development on the game in August, 2021. A demo was released around October, 2021 on Itch.io. The demo was a very early prototype of the game. The actual game was released on April 29th, 2022. Expresso Espresso is my most complex project yet.
        </Typography>
        <Link sx={{mb: 3}} href="https://store.steampowered.com/app/1793360/Expresso_Espresso/" variant="p">
          <Typography variant="h6">
          Steam Page
          </Typography>
        </Link>
        <Typography variant="h6">
            Tools Used: Unity, C#, Adobe Photoshop, Adobe Illustrator, GitHub, Aseprite{"(Art)"}, and Adobe Premiere Pro
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
        Myself - Team Manager, Lead Developer, Lead Artist
      </Typography>
      </ListItem>
      <ListItem>
      {BulletList()}
      <Typography variant="p">
        "Casper" - Assistant Programmer
      </Typography>
      </ListItem>
      <ListItem>
      {BulletList()}
      <Typography variant="p">
        "EJ" - Assistant Pixel Artist
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
            Worldly Effects - While there are other games with the coffee shop management genre, we want to be more in-depth. We want to explore the traits of different people, the laws of different cities, how weather can effect management, and let the player focus more on the economy aspect of managing a coffee shop.    
          </Typography>
        </ListItem>
      </ListItem>
        <Typography variant="h6" sx={{ml: 10}}>
        </Typography>
      <ListItem>
        <ListItem>
          {BulletList()}
          <Typography variant="h6">
            Ground-up Construction - Other cafe management games give players their own cafe to work with. However, the players don't create the cafe from the ground-up. They can only replace furniture and design the flooring and walls. They don't build the actual cafe.
          </Typography>
        </ListItem>
      </ListItem>
      <ListItem>
        <ListItem>
          {BulletList()}
          <Typography variant="h6">
            Economic Management - We wish to provide players a great insight into their budgets, expenses, etc. more so than the other coffee shop games.  
          </Typography>
        </ListItem>
      </ListItem>
    </List>
  </Box>
  <Box>
    <Typography variant="h4">
        Gameplay / Game Feel
    </Typography>
    <Typography variant="h5" sx={{ml: 2}}>
        Art Style
    </Typography>
    <Typography variant="h6" sx={{ml: 2}}>
      Most of the art in Expresso Espresso was created in Aseprite, a pixel art tool. EJ, a pixel artist I recruited online {" (offering split revenue),"} created some of the furniture and characters. 
    </Typography>
    <Grid display="flex" sx={{mt: 3, ml: 2, mb: 2}}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={gif1} alt="Store, main view" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
                Gameplay - Building System
              </Typography>
              <div></div>
              <Typography variant="p" color="text.secondary">
                The building system was created by having an EntityBase class, then using the Factory design pattern to create all the 40+ entities.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={gif2} alt="Paella dish" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
                Gameplay - Coffee Creation
              </Typography>
              <div></div>
              <Typography variant="p" color="text.secondary">
                This is the most complex UI in Expresso Espresso, so far. I created a CoffeeBase script and used the Factory design pattern again for a multitude of coffee types. This UI communicates with the economy master script and changes according to what the player selects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={gif3} alt="Paella dish" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
              Gameplay - Hiring
              </Typography>
              <div></div>
              <Typography variant="p" color="text.secondary">
              I had the most fun implementing the hiring mechanic, I learned a lot about the Unity UI system and used a variety of methods to load resources and generate employee cards. 
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={img1} alt="Paella dish" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
              Gameplay - Employee Inspector
              </Typography>
              <div></div>
              <Typography variant="p" color="text.secondary">
              Here, players can see the different traits, skills, efficiency, and other information of each employee. Each stat is randomly generated with modifiers changing according to the city they chose.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  </Box>
  <Box>
    <Typography variant="h4">
        Grid System, AI, and Entities
    </Typography>
    <Box sx={{mt: 3}}>
      <Typography variant="p">
          In total, we had four different AI entities. The Customer, Barista, Front, and Support. The Barista, Front, and Support all depend on each other to start and run machines for the coffee shop. Casper, our assistant programmer who also helped develop Tilemap Royale, helped me implement the pathfinding. The pathfinding we chose was Dijkstra's Algorithm, I call Dijskstra D* as a shorthand. 
      </Typography>
    </Box>
    <Box sx={{mt: 3}}>
      <Typography variant="p">
          There are 40+ different entities in the game. An entity for this game is defined as any class that inherits the EntityBase class and is displayed in-game. There's a wide variety of entities, from the Ghost Tile, to the AI entities, to the regular building entities. These entities make up over 7,000 lines of code in the game.
      </Typography>
    </Box>
    <Box sx={{mt: 3}}>
      <Typography variant="p">
          Below, we have the flow graph and AI designs for each AI entity. We used this as a foundation to implement the actual AI, of which we used the GridSystem, enums, and a lot of if-statements. If you are an employer and you're interested in seeing the code behind this, click on the Contact page.
      </Typography>
    </Box>
    <Grid display="flex" sx={{mt: 3, ml: 2, mb: 2}}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={AIUI} alt="Store, main view" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
                AI/UI Interaction
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={AI1} alt="Paella dish" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
                Barista Flow Graph
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={AI2} alt="Paella dish" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
              Support Flow Graph
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
            <CardMedia component="img" height="350" image={AI3} alt="Paella dish" />
            <CardContent>
              <Typography variant="p" color="text.secondary">
              Front Flow Graph
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  </Box>
</div>
    );
  }