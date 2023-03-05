import { Paper} from "@mui/material"
import {Search} from "@mui/icons-material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const SearchBar = ({home,setHome,setSearchText}) => {

  const searchVideos = ()=>{
    let searchText =''
    if(home){
      searchText = document.querySelector('input').value
      if(searchText !== ""){
          setSearchText(searchText)
          setHome(false)
      }
    }
    else{
      searchText = document.querySelector('input').value
      setSearchText(searchText)
    }    
  }
  const goToHome = () => {
    setHome(true)
  }
  return (
    <Paper
    component="form"
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
       style={{lineHeight:'30px',fontSize:'20px',border:'none', outline:'none', width:'60vw'}}
      />
      
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