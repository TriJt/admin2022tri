import React from 'react';
import './home.scss'; 
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';

const home = () => {
  return (
    <div>
      {/* đây là trang home của website */}
      <div className="home">
        <Sidebar/>
          <div className="homeContainer">
              <Navbar/> 
            <div className="widgets">
              <Widget type="user" />
              <Widget type="ship" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
            <div className="charts">
            <Featured/>
            <Chart  title="Last 6 Month (Revenue)" aspect={2/1} />
            </div>
            {/* <div className="listContainer">
              <div className="listTitle">
                Latest Transaction
              </div>
              
            </div> */}
          </div>
      </div>
    </div>
  )
}

export default home
