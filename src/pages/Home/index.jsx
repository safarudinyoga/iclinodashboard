import React from 'react';
import './_login.sass';

import Circle from 'src/components/Circle';
import Text from 'src/components/Text';
import Input from 'src/components/Input';
import Button from 'src/components/Button';

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
              transform: 'translate(-20%, 0)',
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
              transform: 'translate(-20%, 70%)',
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
              transform: 'translate(-20%, 140%)',
            }}
          />
        </div>
        <div className="formcontent">
          <Text
            Tag="h1"
            className="bold t-black left-align uppercase"
            text="inclinometer"
            style={{
              letterSpacing: '2px',
              margin: '50px 0 0',
            }}
          />
          <Text
            Tag="h1"
            className="bold t-black left-align uppercase"
            text="dashboard"
            style={{
              letterSpacing: '2px',
              margin: '8px 0 50px',
            }}
          />
          <Text
            Tag="h3"
            className="reg t-light-black center-align"
            text="Please login with your username and password"
            style={{
              margin: '0 0 25px',
            }}
          />
          <Input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            style={{
              margin: '0 0 33px',
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            style={{
              margin: '0 0 50px',
            }}
          />
          <Button
            type="button"
            className="reg center-align t-white"
            text="Login"
          />
          <Text
            Tag="h3"
            className="reg center-align t-green italic"
            text="Forgot Password"
            style={{
              margin: '0 0 30px',
            }}
          />
          <Text
            Tag="h4"
            className="reg center-align t-black margin0"
            text="If an error occurs, contact our customer service at (021) 822-619."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
