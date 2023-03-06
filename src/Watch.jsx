import videoData from './Data.js'
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'

const Watch = () => {
    const {vid} = useParams()
    const indexs = videoData.findIndex(function(element){return element.id === {vid}.vid})
  return (
    (indexs > -1)?
    <div>
        <div style={{width:'800px',height:'400px',backgroundColor:'blue'}}>
        </div>
        <div>
            <span>
                {videoData[indexs].title}
            </span>
        </div>
    </div>
    :
    <ErrorPage/>
  )
}

export default Watch