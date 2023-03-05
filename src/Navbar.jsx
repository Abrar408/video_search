import { AppBar,Toolbar,Stack } from "@mui/material"
import SearchBar from "./Searchbar";

const Navbar = (props) => {
  return (
    <AppBar position='sticky' color='primary'>
        <Toolbar>            
            <Stack ml='auto' mr='auto'>
                <SearchBar home={props.home} setHome={props.setHome} setSearchText={props.setSearchText} />
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
export default Navbar
