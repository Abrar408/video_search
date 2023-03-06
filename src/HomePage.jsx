import {Stack } from "@mui/material"
import videoData from './Data.js'
import HomeCard from './HomeCard.jsx'

const HomePage = () => {
  
  return (
    <Stack direction='row' flexWrap='wrap'>
      {
        videoData.map((videos,index)=>{
          return (<HomeCard video={videos} key={index}/>)
        })
      }
    </Stack>    
  )
}
export default HomePage

