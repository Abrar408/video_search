import {useParams, useSearchParams} from 'react-router-dom'
import videoData from './Data.js'
import SearchCard from './SearchCard.jsx'
import NoResult from './NoResult.jsx'
// import {useNavigate} from 'react-router-dom'

const SearchResult = () => {  
  const [searchParams,setSearchParams] = useSearchParams()
  // const navigate = useNavigate()
  // let searchText = document.getElementById('input').value
  // console.log(searchText)
  const textt = searchParams.get("q")
  // console.log(textt)
  // const {id} = useParams()  
  const videoTitle = videoData.filter( item => item.title.toLowerCase().includes(textt))  
  
  // const goToHome = () => {    
  //   navigate('/')    
  // }
  
  return (
        <>          
          {/* {<button onClick={goToHome} style={{backgroundColor:'blue',width:'150px', height:'50px',
            color:'white', fontSize:'20px', fontWeight:'bold',borderRadius:'5px',
             border:'none',margin:'10px'}}>Go Home</button>} */}
          {(videoTitle.length) ? 
          videoTitle.map((videos,index)=>{
          return (<SearchCard video={videos} key={index} />)
          })
          :
          <NoResult/> } 
        </>  
  )
}
export default SearchResult