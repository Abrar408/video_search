import Appbar from './Navbar.jsx'
import HomePage from './HomePage.jsx';
import SearchResult from './SearchResult.jsx';
import Watch from './Watch.jsx'
import {Routes,Route} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx';
function App() {
  
  return (
    <>
      <Appbar/>  
      <Routes>        
        <Route path='/' element={<HomePage/>} />
        <Route path='/search' element={<SearchResult/>} />
        {/* <Route path='/search/:id' element={<SearchResult/>} /> */}
        <Route path='/watch' element={<Watch/>}/>
        {/* <Route path='/watch/:vid' element={<Watch/>}/> */}
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>    
  );
}

export default App;
