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
import UseCases from '../../Static/PlantGram/UseCases.png'
import HomePage from '../../Static/PlantGram/home.PNG'
import PlantGramTable from '../../Static/PlantGram/PlantGram.PNG'
import PostTable from '../../Static/PlantGram/PlantGramPosts.PNG'

function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function PlantGram() {
  return (
      <div>
        <Box>
          <Typography variant="h4">
              PlantGram
          </Typography>
          <Typography variant="h6">
              PlantGram was a Junior-year project for my Application Development I and II classes. It was an introduction to ReactJS, MongoDB, MySQL, and REST API. Even though this was only last year, I worked on ReactJS for the entire Summer. I also trained myself in VueJS and Angular, which were not offered at Drury University.
              PlantGram is a social media mock-up for plant fanatics.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">
              Sprints 1 - 4: First Semester and Front-end
          </Typography>
          <Typography variant="p">
              Sprint 1 to 4 consisted of determining and implementing the user stories for PlantGram, designing the wireframes and layouts of the website application, and setting up the project.
              The User Stories were provided by our professor, Dr. Sigman, and can be seen on the graph below.
          </Typography>
          <Grid display ="flex" sx={{mt: 2}}>
            <Grid item xs={6} direction="column">
              <Card sx={{ maxWidth: 425, ml: 2, mb: 2 }}>
                <CardMedia component="img" height="700" image={UseCases} alt="Store, main view" />
                <CardContent>
                  <Typography variant="p" color="text.secondary">
                    User Stories / Use Cases by Dr. Sigman
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} direction="column">
              <Box>
              <Typography variant="h6">
                  <b>Details</b>
                </Typography>
                <Typography variant="h6">
                  Implementing all the user stories in the span of two semesters would not be possible, both for the student and for the professor to grade each student. Dr. Sigman first told us what sprints would implement what user stories. 
                  Each sprint lasted for 2 weeks, with some lasting for only 1 week depending on the complexity of each user story or task.
                  Below is the home page design. Dr. Sigman allowed us to design our own "Plant Grams". I designed my PlantGram using Figma.
                </Typography>
              </Box>
              <Box sx={{mt: 1}}>
                <Typography variant="h6">
                  <b>Home Page Design</b>
                </Typography>
                <Card sx={{ maxWidth: 450, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={HomePage} alt="Store, main view" />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="h4">
              Sprints 5 - 8: Second Semester and Back-end
          </Typography>
          <Box >
            <Typography variant="p">
                The second semester, or App Dev II, primarily revolved around the back-end. We implemented account registering, log-ins, REST API, and data storage. For data storage, we first went with MongoDB. Then, we transitioned over to MySQL. I personally like MySQL a lot better than MongoDB.
            </Typography>
          </Box>
          <Box sx={{mt: 1}}>
            <Typography variant="p">
                In this section, I'll show and explain the database design, what form we chose to work with, and the fetch API calls I implemented. In the last sprint, Dr. Sigman allowed us to choose a story to implement. I chose to implement Creating Posts {" (or Post Plant Discovery)."} We used MySQL Workbench to manage and design the tables. I apologize for the two typos for lname, fname, and title since changing them will effect a large chunk of the PlantGram code.
            </Typography>
          </Box>
          <Grid display ="flex" sx={{mt: 2}}>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 280, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={PlantGramTable} alt="Store, main view" />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 300, ml: 2, mb: 2 }}>
                  <CardMedia component="img" height="350" image={PostTable} alt="Store, main view" />
                </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
  );
}