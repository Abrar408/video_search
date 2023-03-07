import { AppBar,Toolbar,Stack, Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SearchBar from "./Searchbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position='sticky' color='primary'>
        <Toolbar>            
            <Stack direction='row' ml='auto' mr='auto'>
            <Button 
            onClick={() => {navigate('/')}}
            variant="contained" startIcon={<HomeIcon />} sx={{backgroundColor:'purple',
          mr:'30px'}}>
              Home
            </Button>
                <SearchBar/>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
export default Navbar
