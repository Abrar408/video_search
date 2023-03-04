import { Card,Stack,CardContent,Typography,IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react"

const SearchResult = ({video}) => {
  const colors = ['pink', 'purple', 'blue', 'green', 'red', 'orange', 'yellow']
  return (
    <Card sx={{width:'90%', border:'1px solid black', borderRadius:'10px',
     padding:'5px',ml:'20px', mr:'20px', mt:'10px',display:'flex'}}>
      <CardContent sx={{backgroundColor:colors[Math.floor(Math.random()*colors.length)], height:'150px', width:'200px',
       border:'1px solid black', borderRadius:'10px',mr:'10px',padding:'0px'}}>

      </CardContent>
      <CardContent sx={{backgroundColor:'green',p:0, '&:last-child': { pb: 0 },
       border:'1px solid black',height:'150px',flex:'1'}}>
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

export default SearchResult