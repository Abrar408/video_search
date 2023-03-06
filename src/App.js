import {useState} from 'react'
import Appbar from './Navbar.jsx'
import HomePage from './HomePage.jsx';
import SearchResult from './SearchResult.jsx';
import Watch from './Watch.jsx'
import {Routes,Route} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx';
function App() {
  const[home,setHome] = useState(true)
  return (
    <>
      <Appbar home={home} setHome={setHome} />  
      <Routes>        
        <Route path='/' element={<HomePage/>} />
        <Route path='/search/:id' element={<SearchResult/>} />
        <Route path='/watch/:vid' element={<Watch/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>    
  );
}

export default App;
