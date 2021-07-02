import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';

import './App.css';

const Home = () => {
  const history = useHistory();

  const [startButton, setStartButton] = useState(true);
  const [joinButton, setJoinButton] = useState(true);

  const joinSubmitHandler = (e) => {
    e.preventDefault();

    // checking for valid uuid
    const re = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);
    if (re.test(e.target.roomId.value)) {
      console.log('valid');
      history.push(`${e.target.roomId.value}?name=${e.target.username.value}`);
    } else {
      console.log('invalid uuid');
    }
  };

  const startSubmitHandler = (e) => {
    history.push(`${v4()}?name=${e.target.text.value}`);
  };

  const startInputHandler = () => {
    setStartButton(false);
  };

  const joinButtonHandler = () => {
    setJoinButton(false);
  };

  return (
    <div className="wraper">
      <div className="container">
        <div className="video-icon">
          <i className="fas fa-video"></i>
          <h1>VIDEO CONFERENCE</h1>
        </div>

        {startButton ? (
          <button className="btn" value="Enter User Name" onClick={startInputHandler}>
            Start Meeting
          </button>
        ) : (
          <form className="form" onSubmit={startSubmitHandler}>
            <input type="text" name="text" className="input-name" placeholder="Enter your name..." />
            <button className="btn" type="submit">
              Start
            </button>
          </form>
        )}

        {joinButton ? (
          <button className="btn" id="login-button" value="Enter Room ID" onClick={joinButtonHandler}>
            Join Meet
          </button>
        ) : (
          <form className="form" onSubmit={joinSubmitHandler}>
            <input type="text" name="roomId" className="input-name" placeholder="Enter Room ID" />
            <input type="text" name="username" className="input-name" placeholder="Enter your name..." />
            <button className="btn" type="submit">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
