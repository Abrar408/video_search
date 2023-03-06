import {useParams} from 'react-router-dom'
import videoData from './Data.js'
import SearchCard from './SearchCard.jsx'
import NoResult from './NoResult.jsx'

const SearchResult = ({video}) => {
  const {id} = useParams()  
  const videoTitle = videoData.filter( item => item.title.toLowerCase().includes({id}.id))  
  return (
        (videoTitle.length) ? 
        videoTitle.map((videos,index)=>{
        return (<SearchCard video={videos} key={index} />)
        })
        :
        <NoResult/>    
  )
}
export default SearchResult