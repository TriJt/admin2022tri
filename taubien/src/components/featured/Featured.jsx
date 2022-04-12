import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart" >
        <CircularProgressbar value={70} text={"70%"} strokeWidth ={3}  />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactions processing. Last payments mat not be included.</p> 
        <div className="summary">
          <div className="item">
            <div className="itemTilte">Target </div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" /> 
              <div className="resultAmount"> $12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTilte">Last week </div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" /> 
              <div className="resultAmount"> $12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTilte">Last month </div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" /> 
              <div className="resultAmount"> $12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
