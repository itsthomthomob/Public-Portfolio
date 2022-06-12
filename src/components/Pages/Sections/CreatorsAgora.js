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
import youtubeswot from '../../Static/CreatorsAgora/youtubeswot.PNG'
import facebookswot from '../../Static/CreatorsAgora/facebookswot.PNG'
import redditswot from '../../Static/CreatorsAgora/redditswot.PNG'
import homepage from '../../Static/CreatorsAgora/homepage.PNG'
import contacts from '../../Static/CreatorsAgora/contacts.PNG'
import messaging from '../../Static/CreatorsAgora/messaging.PNG'
import profile from '../../Static/CreatorsAgora/profile.PNG'


function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function CreatorsAgora() {
    return (
        <div>
          <Box>
            <Typography variant="h4">
              Creators Agora
            </Typography>
            <Typography variant="h6">
              Creators Agora was a social media website I've been designing and planning since my Junior year of High School, so for about 5 years now. Throughout that time, I've done a numerous amount of SWOT tests, different page designs, and I changed the purpose of Creators Agora several times. Originally, it was a platform for creators and companies, where companies can connect to creators and creators can use the platform as a portfolio or blog site. It is not a published platform, as of now. However, CA expanded my web design foundations to great levels. The project helped increase my profeciency in HTML, CSS, and JavaScript. 
            </Typography>
          </Box>
          <Box sx={{mt: 2}}>
            <Typography variant="h4">
              SWOT Analysis
            </Typography>
            <Grid sx={{display: "flex"}}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="400" image={youtubeswot} alt="Store, main view" />
                  <CardContent>
                  <Typography variant="p" color="text.secondary">
                    YouTube SWOT
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 350, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="400" image={facebookswot} alt="Store, main view" />
                  <CardContent>
                  <Typography variant="p" color="text.secondary">
                  FaceBook SWOT
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="400" image={redditswot} alt="Store, main view" />
                  <CardContent>
                  <Typography variant="p" color="text.secondary">
                    FaceBook SWOT
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{mt: 2}}>
            <Typography variant="h4">
                Funding and Revenue
            </Typography>
            <Typography variant="h6">
              While the official platform is unpublished and hasn't been in production, although it could be, I researched and developed several methods for generating revenue and/or profit for the platform. Below is a short list explaining some of the revenue strategies I came up with.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{mt: 2}}>
              <b>Plan A: Default Ads</b>
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              The first monetization plan for Creators Agora would be Default Ads. The Default Ads would be mid-roll ads on videos that are 10 minutes in length or longer, video start ads for videos that are less than 10 minutes, and video end ads also for videos that are less than 10 minutes. Video start and video end ads can be used in videos more than 10 minutes long too, however, the user can only choose between a starter ad or ending ad for 10min videos.
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              <b>Plan B: Subscription-based System</b>
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              The first monetization plan for Creators Agora would be Default Ads. The Default Ads would be mid-roll ads on videos that are 10 minutes in length or longer, video start ads for videos that are less than 10 minutes, and video end ads also for videos that are less than 10 minutes. Video start and video end ads can be used in videos more than 10 minutes long too, however, the user can only choose between a starter ad or ending ad for 10min videos.
            </Typography>
          </Box>
          <Box sx={{mt: 2}}>
            <Typography variant="h4">
                Website Designs
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              In this variation of Creators Agora, I considered allowing each post on the platform to be investable. They won't exactly be like NFTs, but the users who made these posts can sell their posts to other users for a profit. The value of a post comes from the amount fans invested towards each post, similar to how YouTubers have monthly Patreons for their videos. Once a post is sold, the money goes to the creator and a new creator inherits the post after purchasing. The thought experiment behind this was to see how creators would sell their brands through creating high-quality posts that could be sold to other creators.
            </Typography>
            <Grid display="flex" sx={{mt: 2}}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={homepage} alt="Store, main view" />
                  <CardContent>
                    <Typography variant="p" color="text.secondary">
                      Homepage
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={contacts} alt="Store, main view" />
                  <CardContent>
                    <Typography variant="p" color="text.secondary">
                      Contacts
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={messaging} alt="Store, main view" />
                  <CardContent>
                    <Typography variant="p" color="text.secondary">
                      Messaging
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 700, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={profile} alt="Store, main view" />
                  <CardContent>
                    <Typography variant="p" color="text.secondary">
                      Profile
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

        </div>
    );
  }