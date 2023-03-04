import {useState} from 'react'
import {Stack} from '@mui/material'
import Appbar from './Navbar.jsx'
import HomePage from './HomePage.jsx';
import SearchResult from './SearchResult.jsx';
import videoData from './Data.js'

function App() {
  const[home,setHome] = useState(true)
  const[searchText,setSearchText] = useState('')

  // let searchText =''
  // const getInputValue=()=>{
  //   searchText = document.querySelector('input').value
  //   searchText.toLowerCase()
  //   console.log(searchText)
  // }
  
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
        :<Stack>
          {/* {getInputValue()} */}
          {videoData.filter( item => item.title.toLowerCase().includes(searchText)).map((videos,index)=>{
              return (<SearchResult video={videos} key={index} />)
            })}
          
        </Stack> 
      }
      
      
    </div>
  );
}

export default App;
