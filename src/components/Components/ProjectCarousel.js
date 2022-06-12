import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Card from "@material-ui/core/Card";
import {CardMedia} from "@material-ui/core";

// Images for projects
import CSPreview from '../Static/ChromeSwitcher.jpg'
import EEPreview from '../Static/ExpressoEspresso.jpg'

const styles = theme => ({
    Title: {
        width: 300,
        margin: 'auto'
    },
    Media: {
        height: '100%',
        width: '100%'
    }
});

// From the 'Usage' section of the Carousel NPM page
function Example(props)
{
    var items = [
        {
            name: "Expresso Espresso",
            image: EEPreview
        },
        {
            name: "Chrome Switcher",
            image: CSPreview
        }
    ]

    return (
        <Carousel sx={{width: 2/2}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Card>
            <div style={{ position: "relative" }}>
                <CardMedia style={styles.media}
                component="img"
                image={props.item.image}
                title={props.item.name}/> 
                <div style={{
                    position: "absolute", 
                    color: "white",
                    background: "black",
                    top: 5,
                    left: "50%",
                    padding: 5,
                    transform: "translateX(-50%)"}}>
                    {props.item.name}
                </div>
            </div>
        </Card>
    )
}

export default function ProjectCarousel() {
    return (
        <div>
            { Example() }
        </div>
    );
}