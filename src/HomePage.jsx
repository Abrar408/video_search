import { Card,Stack,CardContent,Typography,IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react"

const HomePage = ({video}) => {
  const colors = ['pink', '#ff006f', '#4d47fc', '#7dfc47', '#fc3535', '#ff8e42', '#fff56e']
  return (
    
    <Card sx={{width:{md:'23%',sm:'46%', xs:'100%'}, border:'none', borderRadius:'10px',
     padding:'5px',ml:{md:'auto',sm:'auto', xs:'80px'}, mr:{md:'auto',sm:'auto', xs:'80px'},
      mt:'10px', boxShadow:'0px 2px 5px 0px gray', '&:hover':{transform:'scale(1.1) translate(0px,20px)',boxShadow:'0px 0px 5px 5px gray',zIndex:'1'} }}>
      <CardContent sx={{backgroundColor:colors[Math.floor(Math.random()*colors.length)], height:'150px',
       border:'none', borderRadius:'10px', mb:'10px'}}>
      </CardContent>
      <CardContent sx={{p:0, '&:last-child': { pb: 0 },
       border:'none', padding:'0px'}}>
        <Stack direction='row' sx={{height:'90px'}} >
          <IconButton sx={{color:'white',height:'50px',width:'50px', 
          backgroundColor:'#c7c6c3',margin:'0px 5px'}}>
              <AccountCircleIcon />
          </IconButton>
          <Stack sx={{dispay:'flex', flexDirection:'column', justifyContent:'space-between'}} >  
            <Stack>          
              <Typography variant='p' component='span' fontWeight='bold'>
              {video.title.slice(0,60)}
              </Typography>
            </Stack>  
            <Stack>
              <Typography fontSize={'16px'} color='gray'>
              {video.channel}
              </Typography>
              <Typography fontSize={'small'} color='gray'>
              {video.views}
              </Typography>  
            </Stack>
          </Stack>       
        </Stack>
      </CardContent>
    </Card>
  )
}

export default HomePage