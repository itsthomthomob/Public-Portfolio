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
import Header from "../Components/Header";

// Images
import SoybeanSaga from '../Static/Experience/SoybeanSaga.PNG'
import MutantMillets from '../Static/Experience/MutantMillets.PNG'
import ExpressoEspresso from '../Static/Experience/ExpressoEspresso.jpg'
import ChromeSwitcher from '../Static/Experience/ChromeSwitcher.jpg'

export default function Experience() {
return (
    <div>
        <Header></Header>
        <Box sx={{ml: 3, mt: 2}}>
            <Typography variant="h4">
                    <b>Game Developer Assistant {"(Unity, C#, Oculus)"}</b>
            </Typography>
            <Typography variant="h6" sx={{ml: 2, mt: 2}}>
                <b>Internship at Donald Danforth Plant Science Center </b> {"(September 2021 - May 2022)"}
            </Typography>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                <b>Job Description</b>
            </Typography>
            <Typography variant="h6" sx={{ml: 2}}>
                As a Game Developer Assistant at the Donald Danforth Plant Science Center, located in St. Louis, Missouri, I worked in their Education Department. In this department, Sandra Arango-Caro would be my manager. Her and I would work closely on finishing a Unity project called Soybean Saga and developing a new Unity project called Mutant Millets.
            </Typography>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                <b>Tools Used {"(daily)"}</b> 
            </Typography>
            <Typography variant="h6" sx={{ ml: 2}}>
            Unity, C#, GitHub {"(I introduced GitHub to the Education Manager)"} , Adobe Photoshop, Adobe Premiere Pro, Microsoft Office, and Microsoft Word.   
            </Typography>
            <Grid display="flex" sx={{ ml: 2}}>
                <Grid item xs={4}>
                    <Card height="350" sx={{width: "auto", mt: 2, mb: 2}}>
                        <CardMedia component="img" height="350" image={MutantMillets} alt="Store, main view" />
                        <CardContent>
                            <Typography variant="p" color="text.secondary">
                                <b>Mutant Millets</b> 
                                <div></div>
                                Mutant Millets was another project I was in charge of developing. It was a Soybean plant simulator where the player would select phases or times to go to, then they would be teleported to a room full of plant pots and a data table for entering data about the plants. I was in charge of the overall game design, level design, player movement, integrating oculus devices, physics simulations, watering mechanics, the table-entry mechanic, and other mechanics. 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} >
                    <Card height="350" sx={{ width: "auto",  mt: 2, mb: 2, ml: 2 }}>
                        <CardMedia component="img" height="350" image={SoybeanSaga} alt="Store, main view" />
                        <CardContent>
                            <Typography variant="p" color="text.secondary">
                                <b>Soybean Saga</b> 
                                <div></div>
                                Originally developed by their previous intern, I was in charge of finalizing the project, which included implementing a consistent level design, fixing physics bugs, updating the player movement, and creating a presentational demo video.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ml: 3, mt: 2}}>
            <Typography variant="h4">
                <b>Lead Game Developer</b>
            </Typography>
            <Typography variant="h6" sx={{ml: 2, mt: 2}}>
                <b>Owner of Pixel Steel Studios</b> {"(May 2019 - Present)"}
            </Typography>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                <b>Job Description</b>
            </Typography>
            <Typography variant="h6" sx={{ml: 2}}>
                Pixel Steel Studios is the game development studio name I register myself under when publishing games to Steam and othe platforms. As the lead game developer and to-be CEO of Pixel Steel Studios, I would manage multiple animators, programmers, and artists to develop games that would be published on Steam.
            </Typography>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                See more information on my Projects page under Game Development.
            </Typography>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                <b>Tools Used {"(daily)"}</b> 
            </Typography>
            <Typography variant="h6" sx={{ ml: 2}}>
                MySQL, JavaScript, Unity, C#, GitHub, Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator, Discord, and Microsoft Word.   
            </Typography>
            <Grid display="flex" sx={{ ml: 2}}>
                <Grid item xs={6}>
                    <Card height="350" sx={{width: "auto", mt: 2, mb: 2}}>
                        <CardMedia component="img" height="350" image={ExpressoEspresso} alt="Store, main view" />
                        <CardContent>
                            <Typography variant="p" color="text.secondary">
                                <b>Expresso Espresso</b> 
                                <div></div>
                                • 2D Coffee shop mangement game built in Unity and C# made for PC and Mac devices <div></div>
                                • Responsible for: Team management, AI systems, Economy systems, Game flow <div></div>
                                • Save Sytem in JSON, Custom Entity System using the Factory class design, handled publishing <div></div>
                                • 150,000+ Impressions, 15,000+ Clicks, 300+ Wishlists, 100+ Players <div></div>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card height="350" sx={{ width: "auto",  mt: 2, mb: 2, ml: 2 }}>
                        <CardMedia component="img" height="350" image={ChromeSwitcher} alt="Store, main view" />
                        <CardContent>
                            <Typography variant="p" color="text.secondary">
                                <b>Chrome Switcher</b> 
                                <div></div>
                                • Worked in Unity, C# to create a parkour-puzzle game in a 3D environment for PC <div></div>
                                • Developed parkour mechanics: wall-running, sliding, zip-lining, climbing, etc. <div></div>
                                • Led a team of 4, Game Design, Level Design, handled publishing <div></div>
                                • 400,000+ Impressions, 20,000+ Clicks, 160+ Wishlists, 50+ Players
                             </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </div>
)
}