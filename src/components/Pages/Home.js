import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProjectCarousel from '../Components/ProjectCarousel';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import LinearProgress from '@mui/material/LinearProgress';
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'

const listItemColor = '#F0EFF4';
const progressPrimary = '#3083DC';
const progressSecondary = '#F0EFF4';

function homePrompt()
{
    return(
        <div>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1, mt: 4, ml: 3 }}>
            <b>Hello, my name is Thomas O'Brien.</b>
            </Typography>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, mt: 2, ml: 3 }}>
            I am a <b>Software Engineering</b> and <b>Business Management</b> student with real-world experience in the game development industry. If you are an employer, please take a look at my projects below or click on the experiences tab.
            </Typography>
        </div>
    )
}

function ProgrammingLanguages()
{
    return(
        <div>
            <Typography variant="p" component="div" sx={{ml: 0}}>
            <b>Programming Languages</b>
            </Typography>
            <List sx={{ width: '100%'}} aria-label="contacts">
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Javascript" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={90} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="C#" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={80} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Ruby" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={75} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Java" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={75} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Python" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={60} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="C/C++" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={35} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
            </List>
        </div>
    )
}

function FrontEndSkills()
{
    return(
        <div>
            <Typography variant="p" component="div" sx={{ml: 0}}>
            <b>Front-End</b>
            </Typography>
            <List sx={{ width: '100%'}} aria-label="contacts">
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="HTML" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={100} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="CSS" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={90} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="JavaScript" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={90} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="React" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={70} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="NodeJS" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={80} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Express" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={80} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="MUI" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={85} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Bootstrap" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={60} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Angular" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={30} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Vue" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={40} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Vuetify" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={30} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
            </List>
        </div>
    )
}

function BackEndSkills()
{
    return(
        <div>
            <Typography variant="p" component="div" sx={{ml: 0}}>
            <b>Back-End</b>
            </Typography>
            <List sx={{ width: '100%'}} aria-label="contacts">
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="MySQL" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={75} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="MongoDB" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={60} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="Firebase" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={40} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText disableTypography primary="AWS" style={{ color: listItemColor, width: 100 }}/>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={10} sx={{ ml:3, backgroundColor: progressSecondary,
                        "& .MuiLinearProgress-bar": {
                        backgroundColor: progressPrimary
                        }}} />
                    </Box>
                </ListItem>
            </List>
        </div>
    )
}

function ProjectShowcaseDetails()
{
    return(
        <List sx={{ width: '100%', mb: 2}} aria-label="contacts">
            <ListItem disablePadding>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h6" component="div" sx={{  }}>
                        <b>Details</b>
                    </Typography>
                </Box>
            </ListItem>
            <ListItem disablePadding>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="p" component="div" sx={{ mt: 1 }}>
                        Expresso Espresso is a coffee shop management game with an emphasis on ground-up cafe construction, employee management, and creating coffee drinks. The game is published on Steam.
                    </Typography>
                </Box>
            </ListItem>
            <ListItem disablePadding>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="p" component="div" sx={{ mt: 2 }}>
                        <b>My Responsibilities</b>
                    </Typography>
                </Box>
            </ListItem>
            <ListItem>
            <Box sx={{ width: '100%' }}>
                    <Typography variant="p" component="div" sx={{ mt: 1 }}>
                        - Manage a team of 3 developers {"(Myself as the lead developer, a pixel artist, and another developer)"}
                    </Typography>
                    <Typography variant="p" component="div" sx={{ mt: 1 }}>
                        - Implemented AI Systems, Economy Systems, the Save System {"(using JSON and states)"}, Grid-based Building, and more.
                    </Typography>
                    <Typography variant="p" component="div" sx={{ mt: 1 }}>
                        - Managed Steamworks settings, kept in-touch with influencers, handled business-related aspects
                    </Typography>
                    <Typography variant="p" component="div" sx={{ mt: 1 }}>
                        - 150,000+ Impressions, 20,000+ Clicks, 330+ Wishlists, 100+ Players
                    </Typography>
                </Box>
            </ListItem>
        </List>
    )
}

// For the project showcase video
function ProjectShowcaseVideo()
{
    var mp = new MuiPlayer({
        container:'#mui-player',
        title:'Expresso Espresso Trailer',
        src:'https://cdn.akamai.steamstatic.com/steam/apps/256882532/movie480_vp9.webm?t=1650166464',
    })
    return(<div id="mui-player"></div>)
}

export default function Home() {
    return (
        <div>
            <Header></Header>
            <Box sx={{}}>
                {homePrompt()}
            </Box>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Grid item sx={{mt: 3, ml: 3, width: 500}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 2, mb: 3, textAlign: 'center' }}>
                    Project Showcase
                    </Typography>
                    <ProjectCarousel></ProjectCarousel>
                </Grid>
            </Grid>
            <Typography sx={{mt: 3, ml: 3}} variant="h4" component="div">
                    <b>My Current Techstack</b>
            </Typography>
            <Grid display="flex">
                <Grid item xs={6} sx={{mt: 3, ml: 3}}>
                    { FrontEndSkills() }
                </Grid>
                <Grid item xs={6} sx={{mt: 3, ml: 3}}>
                    { ProgrammingLanguages() }
                </Grid>
                <Grid item xs={6} sx={{mt: 3, ml: 3}}>
                    { BackEndSkills() }
                </Grid>
            </Grid>
            <Typography sx={{mt: 3, ml: 3}} variant="h4" component="div">
                    <b>Featured Project</b>
            </Typography>
            <Typography sx={{ml: 3}} variant="h5" component="div">
                    <b>Expresso Espresso</b>
            </Typography>
            <Grid display="flex">
                <Grid item xs={6} sx={{mt: 3, ml: 3}}>
                    { ProjectShowcaseVideo() }
                </Grid>
                <Grid item xs={6} sx={{mt: 3, ml: 3}}>
                    { ProjectShowcaseDetails() }
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
}