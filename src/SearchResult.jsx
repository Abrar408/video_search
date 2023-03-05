import { Card,Stack,CardContent,Typography,IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react"

const SearchResult = ({video}) => {
  const colors = ['pink', '#ff006f', '#4d47fc', '#7dfc47', '#fc3535', '#ff8e42', '#fff56e']
  return (
    <Card sx={{width:'90%', border:'none', borderRadius:'10px',
     padding:'5px',ml:'20px', mr:'20px', mt:'10px',display:'flex', 
     boxShadow:'0px 0px 5px 2px gray','&:hover':{transform:'scale(1.05)',boxShadow:'0px 0px 5px 5px gray',zIndex:'1'}}}>
      <CardContent sx={{backgroundColor:colors[Math.floor(Math.random()*colors.length)], height:'150px', width:'200px',
       border:'none', borderRadius:'10px',mr:'10px',padding:'0px'}}>

      </CardContent>
      <CardContent sx={{p:0, '&:last-child': { pb: 0 },
       border:'none',height:'150px',flex:'1'}}>
        <Stack direction='row' sx={{height:'150px'}}>
          <IconButton sx={{color:'white',height:'50px',width:'50px', 
          backgroundColor:'#c7c6c3',margin:'0px 5px'}}>
              <AccountCircleIcon />
          </IconButton>
          <Stack sx={{display:'flex', flexDirection:'column',justifyContent:'space-around'}} >
            <Typography variant='h6' component='span' fontWeight='bold'>
            {video.title}
            </Typography>
            <Typography fontSize={'medium'} color='black'>
            {video.channel}
            </Typography>
            <Typography fontSize={'medium'} color='gray'>
            {video.views}
            </Typography>  
          </Stack>       
        </Stack>
      </CardContent>
    </Card>
  )
}

export default SearchResult