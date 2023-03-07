import { Paper} from "@mui/material"
import {Search} from "@mui/icons-material"
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  
  const searchVideos = ()=>{
    let searchText = document.querySelector('input').value
      if(searchText !== ""){
          navigate(`/search/${searchText}`)
      }       
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
      <input id='input'       
       className="search-bar"
       placeholder="Search..."
       style={{lineHeight:'30px',fontSize:'20px',border:'none', outline:'none', width:'60vw'}}/>          
      <Search onClick ={searchVideos} sx={{color:'gray',mr:'10px','&:hover': { color:'red'}}}/>                 
    </Paper>
  )
}
export default SearchBar