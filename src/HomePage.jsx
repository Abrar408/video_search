import { Card,Stack,CardContent,Typography,IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react"

const HomePage = ({video}) => {
  const colors = ['pink', 'purple', 'blue', 'green', 'red', 'orange', 'yellow']
  return (
    
    <Card sx={{width:{md:'23%',sm:'46%', xs:'100%'}, border:'1px solid black', borderRadius:'10px',
     padding:'5px',ml:{md:'auto',sm:'auto', xs:'80px'}, mr:{md:'auto',sm:'auto', xs:'80px'}, mt:'10px'}}>
      <CardContent sx={{backgroundColor:colors[Math.floor(Math.random()*colors.length)], height:'150px',
       border:'1px solid black', borderRadius:'10px', mb:'10px'}}>
      </CardContent>
      <CardContent sx={{backgroundColor:'green',paddingBottom:'0px',
       border:'1px solid black', padding:'0px',height:'60px'}}>
        <Stack direction='row'>
          <IconButton sx={{color:'white',height:'50px',width:'50px', 
          backgroundColor:'blue',margin:'0px 5px'}}>
              <AccountCircleIcon />
          </IconButton>
          <Stack>
            <Typography variant='h6' component='span' fontWeight='bold'>
            {video.title}
            </Typography>
            <Typography>
            {video.channel}
            </Typography>
            <Typography>
            {video.views}
            </Typography>  
          </Stack>       
        </Stack>
      </CardContent>
    </Card>
  )
}

export default HomePage