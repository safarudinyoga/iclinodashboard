import React from 'react';
import './_login.sass';

import Circle from 'src/components/Circle';
import Icons from 'src/components/Icons';

const Home = () => {

  return (
    <div className="dashboardhome">
      <div className="containerdashboard">
        <div className="iconcontent">
          <Circle
            style={{
              width: '75%',
              height: '40%',
              backgroundColor: '#ffe3e2',
              position: 'absolute',
              top: '10px',
              right: '0',
              zIndex: 1,
              transform: 'translate(-40%, 0)',
            }}
          />
          <Circle
            style={{
              width: '75%',
              height: '40%',
              backgroundColor: '#fae3ff',
              position: 'absolute',
              top: '10px',
              right: '0',
              zIndex: 2,
              transform: 'translate(-40%, 70%)',
            }}
          />
          <Circle
            style={{
              width: '75%',
              height: '40%',
              backgroundColor: '#e4f8ff',
              position: 'absolute',
              top: '10px',
              right: '0',
              zIndex: 3,
              transform: 'translate(-40%, 140%)',
            }}
          />
        </div>
        <div className="formcontent" />
      </div>
    </div>
  );
};

export default Home;
