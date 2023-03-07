import { AppBar,Toolbar,Stack } from "@mui/material"
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <AppBar position='sticky' color='primary'>
        <Toolbar>            
            <Stack ml='auto' mr='auto'>
                <SearchBar/>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
export default Navbar
