import videoData from './Data.js'
import {useNavigate, useParams, useSearchParams} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'

const Watch = () => {
  const colors = ['pink', '#ff006f', '#4d47fc', '#7dfc47', '#fc3535', '#ff8e42', '#fff56e']
    const [watchParams,setWatchParams] = useSearchParams()
    const navigate = useNavigate()
    const textt = watchParams.get('v')
    console.log(textt)
    // const {vid} = useParams()
    const indexs = videoData.findIndex(function(element){return element.id === watchParams.get('v')})
    const suggestVideo = [...videoData]
    suggestVideo.splice(indexs, 1)
    const seeSug = (video) => {
      navigate(`/watch?v=${video.id}`)
    }
  return (
    (indexs > -1)?
    <div style={{display:'flex',padding:'10px'}}>
      
      <div style={{flex:'2'}}> 
        <div style={{width:'100%',height:'400px',backgroundColor:'#292828'}}>
        </div>
        <p style={{fontSize:'25px', fontWeight:'bold'}}> 
                {videoData[indexs].title}
        </p>
        <p style={{fontSize:'18px', fontWeight:'bold'}}> 
                {videoData[indexs].channel}
        </p>
        <p > 
                {videoData[indexs].views}
        </p>
      </div>

      <div  style={{flex:'1',padding:'0px 10px'}}> 
        {/* {const suggestVideo = videoData.splice(indexs, 1)} */}
        {suggestVideo.map((video,index)=>{
          return(
            <>
            <div style={{border:'1px solid gray',borderRadius:'10px', margin:'0px 0px 5px',
          padding:'5px',boxShadow:'0px 0px 5px 2px gray'}}>
              <div onClick={()=>{seeSug(video)}} key={index} style={{width:'100%',
              height:'200px',backgroundColor:colors[Math.floor(Math.random()*colors.length)],
              borderRadius:'10px'}}></div>
              <p style={{margin:'10px 0px', fontWeight:'bold'}}>{video.title}</p>
            </div>
            </>)
        })}
      </div>        
        
    </div>
    :
    <ErrorPage/>
  )
}

export default Watch