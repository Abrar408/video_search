import { Paper,IconButton,Stack } from "@mui/material"
import {Search} from "@mui/icons-material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const SearchBar = ({home,setHome,setSearchText}) => {

  const searchVideos = ()=>{
    let searchText =''
    if(home){
      searchText = document.querySelector('input').value
      if(searchText !== ""){
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
    // onSubmit={()=>{}}
    sx={{
      borderRadius:20,
      border: '1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      mr: {sm:5}
    }}
    >
      <input
       className="search-bar"
       placeholder="Search..."
      />
      <IconButton 
      // type="submit"
      
      sx={{p:'10px', color:'gray'}}
      >        
      {(home)?<Search onClick ={searchVideos}/>
      :<Stack direction='row'>
        <Search onClick ={searchVideos}/>
        <KeyboardReturnIcon onClick ={goToHome}/>
      </Stack>
      }        
      </IconButton>
    </Paper>
  )
}

export default SearchBar