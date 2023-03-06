import { Link } from "react-router-dom"

const ErrorPage = () => {
    
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1 style={{fontSize:'100px', color:'pink', WebkitTextStroke:'2px red'}}>
            Error: 404</h1>
        <p>The page you are looking for may have been removed, deleted or possibly 
            never existed.</p>
        <Link to='/'>
        <button style={{width:'150px',height:'50px', color:'white',backgroundColor:'green',
        fontSize:'20px',fontWeight:'bold', border:'none', borderRadius:'5px',
        }}>GO HOME</button>
        </Link>
    </div>
  )
}

export default ErrorPage