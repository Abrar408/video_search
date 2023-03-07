import { Paper} from "@mui/material"
import {Search} from "@mui/icons-material"
import {useNavigate, useSearchParams} from 'react-router-dom'


const SearchBar = () => {
 
  const [searchParams,setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  
  let searchText = document.querySelector('input')

  // console.log(searchText)

  const searchVideos = ()=>{
    
      if(searchText.value !== ""){
          // console.log(searchText)
          // setSearchParams({q:searchText});
          // console.log(searchParams.get("q"))
          
          navigate(`/search?q=${searchParams.get("q") ||  searchText.value}`)
          
      }       
  } 
  const storeParam = (e) => {
    e.preventDefault()
    setSearchParams({q:e.target.value})
  }

  return (
    <Paper
    sx={{
      borderRadius:20,
      border: '1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      display:'flex',
      alignItems: 'center'
    }}
    >
      <input 
       onChange={storeParam}
      //  ref={inputRef}
       id='input'       
       className="search-bar"
       placeholder="Search..."
       style={{lineHeight:'30px',fontSize:'20px',border:'none', outline:'none', width:'60vw'}}/>          
      <Search onClick ={searchVideos} sx={{color:'gray',mr:'10px','&:hover': { color:'red'}}}/>                 
    </Paper>
  )
}
export default SearchBar