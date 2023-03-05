import {useState} from 'react'
import {Stack} from '@mui/material'
import Appbar from './Navbar.jsx'
import HomePage from './HomePage.jsx';
import SearchResult from './SearchResult.jsx';
import videoData from './Data.js'
import NoResult from './NoResult.jsx';

function App() {
  const[home,setHome] = useState(true)
  const[searchText,setSearchText] = useState('')
  const abc = videoData.filter( item => item.title.toLowerCase().includes(searchText))

  return (
    <div className="App">
      <Appbar home={home} setHome={setHome} setSearchText={setSearchText} />      
      {
        (home)?
          <Stack direction='row' flexWrap='wrap'>
            {
              videoData.map((videos,index)=>{
                return (<HomePage video={videos} key={index}/>)
              })
            }
          </Stack>           
        :
        (
          (abc.length) ? 
          abc.map((videos,index)=>{
          return (<SearchResult video={videos} key={index} />)
          })
        :
          <NoResult/>
        )               
      }     
      
    </div>
  );
}

export default App;
