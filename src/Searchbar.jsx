import { Paper} from "@mui/material"
import {Search} from "@mui/icons-material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {useNavigate} from 'react-router-dom'

const SearchBar = ({home,setHome}) => {
  const navigate = useNavigate()
  const searchVideos = ()=>{
    let searchText = document.querySelector('input').value
    if(home){ 
      if(searchText !== ""){
          navigate(`/search/${searchText}`)
          setHome(false)
      }
    }
    else{
      navigate(`/search/${searchText}`)
    }    
  }
  const goToHome = () => {
    setHome(true)
    navigate('/')
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
       className="search-bar"
       placeholder="Search..."
       style={{lineHeight:'30px',fontSize:'20px',border:'none', outline:'none', width:'60vw'}}/>      
      
      {(home)?      
        <Search onClick ={searchVideos} sx={{color:'gray',mr:'10px','&:hover': { color:'red'}}}/>      
      :
      <>        
        <Search onClick ={searchVideos} sx={{color:'gray',mr:'10px','&:hover': { color:'red'}}}/>        
        <KeyboardReturnIcon onClick ={goToHome} sx={{color:'gray','&:hover': { color:'black'}}}/>
      </>
      }
    </Paper>
  )
}
export default SearchBar