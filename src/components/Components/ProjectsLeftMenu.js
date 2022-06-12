import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Sections
import TilemapRoyale from '../Pages/Sections/TilemapRoyale'
import ChromeSwitcher from '../Pages/Sections/ChromeSwitcher'
import ExpressoEspresso from '../Pages/Sections/ExpressoEspresso'
import PlantGram from '../Pages/Sections/PlantGram'
import Portfolio from '../Pages/Sections/Portfolio'
import CreatorsAgora from '../Pages/Sections/CreatorsAgora'
import Trace from '../Pages/Sections/Trace'
import DataAnalytics from '../Pages/Sections/DataAnalytics'
import InfluencerMarketing from '../Pages/Sections/InfluencerMarketing'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})

(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // To handle multiple sections, create an enum-like string
    let curSection = "";

    // TilemapRoyale section
    const [TRstate, setTRState] = React.useState("");
    
    function onTilemapClick() {
      curSection = "TR";
      checkStates();
    };

    // ChromeSwitcher section
    const [CSstate, setCSstate] = React.useState("");

    function onCSclick() {
      curSection = "CS";
      checkStates();
    };

    // ExpressoEspresso section
    const [EEstate, setEEstate] = React.useState("");

    function onEEclick() {
      curSection = "EE";
      checkStates();
    };

    // PlantGram section
    const [PGstate, setPGstate] = React.useState("");

    function onPGclick() {
      curSection = "PG";
      checkStates();
    };

    // PlantGram section
    const [Pstate, setPstate] = React.useState("");

    function onPclick() {
      curSection = "P";
      checkStates();
    };

    // CreatorsAgora section
    const [CAstate, setCAstate] = React.useState("");

    function onCAclick() {
      curSection = "CA";
      checkStates();
    };

    // Data Analytics section
    const [DAstate, setDAstate] = React.useState("");

    function onDAclick() {
      curSection = "DA";
      checkStates();
    };

    // Influencer Marketing section
    const [IFstate, setIFstate] = React.useState("");

    function onIFclick() {
      curSection = "IF";
      checkStates();
    };

    // Trace section
    const [Tstate, setTstate] = React.useState("");

    function onTclick() {
      curSection = "T";
      checkStates();
    };

  function checkStates()
  {
      switch(curSection)
      {
          case "TR":
            setTRState("Block");
            setCSstate("none");
            setEEstate("none");
            setPGstate("none");
            setPstate("none");
            setCAstate("none");
            setTstate("none");
            setDAstate("none");
            setIFstate("none");
            break;
          case "CS":
            setTRState("none");
            setCSstate("Block");
            setEEstate("none");
            setPGstate("none");
            setPstate("none");
            setCAstate("none");
            setTstate("none");
            setDAstate("none");
            setIFstate("none");
            break;
          case "EE":
            setTRState("none");
            setCSstate("none");
            setEEstate("Block");
            setPGstate("none");
            setPstate("none");
            setCAstate("none");
            setTstate("none");
            setDAstate("none");
            setIFstate("none");
            break;
          case "PG":
            setTRState("none");
            setCSstate("none");
            setEEstate("none");
            setPGstate("Block");
            setPstate("none");
            setCAstate("none");
            setTstate("none");
            setDAstate("none");
            setIFstate("none");
            break;
          case "P":
            setTRState("none");
            setCSstate("none");
            setEEstate("none");
            setPGstate("none");
            setPstate("Block");
            setCAstate("none");
            setTstate("none");
            setDAstate("none");
            setIFstate("none");
            break;
          case "CA":
            setTRState("none");
            setCSstate("none");
            setEEstate("none");
            setPGstate("none");
            setPstate("none");
            setCAstate("Block");
            setTstate("none");
            setDAstate("none");
            setIFstate("none");
            break;
          case "T":
            setTRState("none");
            setCSstate("none");
            setEEstate("none");
            setPGstate("none");
            setPstate("none");
            setCAstate("none");
            setTstate("Block");
            setDAstate("none");
            setIFstate("none");
            break;
          case "DA":
            setTRState("none");
            setCSstate("none");
            setEEstate("none");
            setPGstate("none");
            setPstate("none");
            setCAstate("none");
            setTstate("none");
            setDAstate("Block");
            setIFstate("none");
            break;
          case "IF":
            setTRState("none");
            setCSstate("none");
            setEEstate("none");
            setPGstate("none");
            setPstate("none");
            setCAstate("none");
            setTstate("none");
            setDAstate("none");
            setIFstate("Block");
            break;
      }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader>
        </DrawerHeader>
        <List sx={{ml: 1}}>
            <ListItem disablePadding sx={{}}>
                <b>Game Development</b>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Tilemap Royale"} onClick={onTilemapClick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Chrome Switcher"} onClick={onCSclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Expresso Espresso"} onClick={onEEclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{}}>
                <b>Software Engineering</b>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"PlantGram"} onClick={onPGclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"This Portfolio"} onClick={onPclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Creators Agora"} onClick={onCAclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Trace - Scrum Project"} onClick={onTclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{}}>
                <b>Business/Data Analytics</b>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Data Analytics"} onClick={onDAclick}></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={"Influencer Marketing"} onClick={onIFclick}></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Main open={true}>
        <DrawerHeader />
        <Box sx={{display: TRstate}}>
            <TilemapRoyale>
            </TilemapRoyale>
        </Box>
        <Box sx={{display: CSstate}}>
            <ChromeSwitcher>
            </ChromeSwitcher>
        </Box>
        <Box sx={{display: EEstate}}>
            <ExpressoEspresso>
            </ExpressoEspresso>
        </Box>
        <Box sx={{display: PGstate}}>
            <PlantGram>
            </PlantGram>
        </Box>
        <Box sx={{display: Pstate}}>
            <Portfolio>
            </Portfolio>
        </Box>
        <Box sx={{display: CAstate}}>
            <CreatorsAgora>
            </CreatorsAgora>
        </Box>
        <Box sx={{display: Tstate}}>
            <Trace>
            </Trace>
        </Box>
        <Box sx={{display: DAstate}}>
            <DataAnalytics>
            </DataAnalytics>
        </Box>
        <Box sx={{display: IFstate}}>
            <InfluencerMarketing>
            </InfluencerMarketing>
        </Box>
      </Main>
    </Box>
  );
}