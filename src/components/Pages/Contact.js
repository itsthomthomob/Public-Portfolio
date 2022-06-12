import React from "react";
import Axios from 'axios';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../Components/Header";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { alpha, styled } from '@mui/material/styles';

const EmailTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderColor: 'white',
        background: 'white',
        color: 'black'
    },
});

const BodyTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderColor: 'white',
        background: 'white',
        color: 'black',
        height: '10em'
    },
});

const SubjectTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderColor: 'red',
        background: 'white',
        color: 'black'
    },
});

const SubmitButton = styled(Button)({
    color: 'black',
    border: 'solid black 2px'
});

export default function Contact(props) {

    const [curEmail, setEmail] = React.useState(false);
    const [curBody, setBody] = React.useState(false);
    const [curSubject, setSubject] = React.useState(false);

    async function onSubmit()
    {
        const mailData = 
        {
            sender: curEmail,
            subject: curSubject,
            body: curBody
        }

        
        // const axiosInstance = Axios.create({
            //     baseURL: 'http://localhost:3000'
            // });
            
            // axiosInstance.post('/api/ContactAPI', {
                //     mailData
                // })
                // .then(function (response) {
        //     resData = response;
        //     console.log(response);
        // })
        // .catch(function (error) {
            //     console.log(error);
            // });
            
        const response = await fetch("/api/ContactAPI", {
            method: "post",
            headers: {'Accept': 'application/json', "Content-Type": "application/json"},
            body: JSON.stringify({mailData}) 
        });
        
        let resData = await response.json();

        //console.log(JSON.stringify(resData));

        if(resData !== null)
        {
            if(resData.msg === "success")
            {
                alert("Email sent.");
            }
            else
            {
                alert("Error: " + resData.msg)
            }
        }
    }

    function handleSubject(e)
    {
        setSubject(e.target.value);
    }
    function handleBody(e)
    {
        setBody(e.target.value);
    }
    function handleSender(e)
    {
        setEmail(e.target.value);
    }

    return (
        <div>
            <Header></Header>
            <Typography variant="h4" sx={{ml: 13, mt: 5}}>
                Contact
            </Typography>
            <Paper elevation={3} sx={{ml: 13, mt: 4, width: 8/10}}>
                <Grid>
                    <Grid container direction='row' alignItems="stretch" justifyContent={"center"}>
                        <Grid item sx={{mt: 4, width: 8/10}}>
                            <SubjectTextField onChange={handleSubject} id="subject" label="Subject"  sx={{width: 1/1}} />
                        </Grid>
                        <Grid item sx={{mt: 4, width: 8/10, height: '10em'}}>
                            <BodyTextField onChange={handleBody} id="body" label="Body" sx={{width: 1/1, height: '10em'}} />
                        </Grid>
                        <Grid item sx={{mt: 4, width: 8/10}}>
                            <EmailTextField onChange={handleSender} id="sender" label="Email" sx={{width: 1/1, }} />
                        </Grid>
                    </Grid>
                </Grid>
                <SubmitButton onClick={onSubmit} sx={{ml: 13, mt: 4, mb: 4}}>Submit</SubmitButton>
            </Paper>
            <Typography sx={{mt: 2, ml: 13}} variant="h4">
            Having Issues?
            </Typography>
            <Typography sx={{mt: 1, ml: 13}} variant="h6">
            Email me directly at: thomasobrienbusiness@gmail.com
            </Typography>
        </div>
    )
}