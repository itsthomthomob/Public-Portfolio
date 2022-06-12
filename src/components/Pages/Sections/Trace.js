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
import TraceIMG from '../../Static/Trace/Trace.PNG'
import SysInc from '../../Static/Trace/sysinc.PNG'
import s1Con from '../../Static/Trace/s1con.PNG'
import s1Elab from '../../Static/Trace/s1elab.PNG'

import SequenceDiagram from '../../Static/Trace/SequenceDiagram.PNG'
import UpdatedUserCases from '../../Static/Trace/UpdatedUserCases.PNG'
import UpdatedUserCases2 from '../../Static/Trace/UpdatedUserCases2.PNG'
import ObjectAnalysis from '../../Static/Trace/ObjectAnalysis.PNG'
import ElaborationClassDiagram from '../../Static/Trace/ElaborationClassDiagram.PNG'


function BulletList()
{
  return(
    <CircleIcon sx={{color: "white", fontSize: 12, mr: 2}} />
  )
}

export default function Trace() {
    return (
        <div>
          <Box>
            <Typography variant="h4">
              Trace
            </Typography>
            <Typography variant="h6">
              Trace was a class project in my Software Engineering class. In this project, as a team, we simulated project management throughout a software development life cycle. Our professor, Dr. Sigman, chose to do Scrum for our projects. We were only able to fully develop and design Sprint 1.
            </Typography>
            <Typography variant="h4">
              The Team
            </Typography>
            <Typography variant="h5">
              {"(Classmates in the same team as me)"}
            </Typography>
            <List>
              <ListItem>
              {BulletList()}
              <Typography variant="p">
                Myself - Scrum Master/Team Manager
              </Typography>
              </ListItem>
              <ListItem>
              {BulletList()}
              <Typography variant="p">
                Vicky - Scrum Helper
              </Typography>
              </ListItem>
              <ListItem>
              {BulletList()}
              <Typography variant="p">
                Daniel - Co-developer
              </Typography>
              </ListItem>
              <ListItem>
              {BulletList()}
              <Typography variant="p">
                Michael - Co-developer
              </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography variant="h4">
              My Responsibilities
            </Typography>
            <Typography variant="h6">
              As the scrum master/team manager, I was responible for maintaining the GitHub repo, the Trello board, delegating tasks to each member, leading scrum meetings, and doing some of the tasks I designated myself. 
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              <b>GitHub Management</b>
            </Typography>
            <Link href="https://github.com/DUCS-SE/Trace/wiki">
            <Typography variant="h6" sx={{mt: 2, mb: 2}}>
              GitHub Link
            </Typography>
            </Link>
            <Box>
              <Card sx={{maxWidth: 900}}>
                <CardMedia component="img" height="500" image={TraceIMG} alt="Store, main view" />
                <CardContent>
                <b>GitHub Wiki</b>
                <div></div>
                Due to how GitHub functions, I was in charge of who could edit the wiki at what times. We would edit the wiki in orderly fasion, determined by the priority of a task.
                </CardContent>
              </Card>
            </Box>
            <Typography variant="h6" sx={{mt: 2}}>
              <b>Trello Management</b>
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              In order to manage the trello in an organized manner, I created three lists for each phase of Sprint 1. To Do, Doing, and Done. I implemented a check and balances system where I would mark a "Doing" item with an orange label, indicating each member needs to check the task to see if the quality is high enough. Then, if we all agree, we would publish the task to the Wiki and place it in the Done list.
            </Typography>
            <Grid display="flex" sx={{mt: 2}} >
              <Grid item sx={4}>
                <Card sx={{maxWidth: 300, ml: 2}}>
                  <CardMedia component="img" height="400" image={SysInc} alt="Store, main view" />
                  <CardContent>
                  <b>System Inception</b>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sx={4}>
                <Card sx={{maxWidth: 320, ml: 2}}>
                  <CardMedia component="img" height="400" image={s1Con} alt="Store, main view" />
                  <CardContent>
                  <b>Sprint 1 Construction</b>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sx={4}>
                <Card sx={{maxWidth: 350, ml: 2}}>
                  <CardMedia component="img" height="400" image={s1Elab} alt="Store, main view" />
                  <CardContent>
                  <b>Sprint 1 Elaboration</b>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{mt: 2}}>
              <b>My Work</b>
            </Typography>
            <Typography variant="h6" sx={{mt: 2}}>
              Below is a grid showcasing the work I did for the Trace project. To design the diagram and tables, I introduced the Milo team-planning app to the team.
            </Typography>
            <Grid display="flex" sx={{mt: 3, mb: 2}}>
              <Grid item xs={6}>
                <Card sx={{maxWidth: 600, ml: 2, mt: 2}}>
                    <CardMedia component="img" height="400" image={SequenceDiagram} alt="Store, main view" />
                    <CardContent>
                    <b>Sequence Diagram</b>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 600, ml: 2, mt: 2}}>
                    <CardMedia component="img" height="400" image={ObjectAnalysis} alt="Store, main view" />
                    <CardContent>
                    <b>Object Analysis</b>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 600, ml: 2, mt: 2}}>
                    <CardMedia component="img" height="400" image={UpdatedUserCases} alt="Store, main view" />
                    <CardContent>
                    <b>Updated User Cases - Detective User</b>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 600, ml: 2, mt: 2}}>
                    <CardMedia component="img" height="400" image={UpdatedUserCases2} alt="Store, main view" />
                    <CardContent>
                    <b>Updated User Cases - Developer</b>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 600, ml: 2, mt: 2}}>
                    <CardMedia component="img" height="400" image={SequenceDiagram} alt="Store, main view" />
                    <CardContent>
                    <b>Sequence Diagram</b>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
    );
  }