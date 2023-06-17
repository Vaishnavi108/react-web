
import React, { useState } from 'react';

const CircleButton = () => {
  const [circles, setCircles] = useState([{ counter: 0, backgroundColor: 'yellow' }]);

  const incrementCounter = (index) => {
    const updatedCircles = [...circles];
    updatedCircles[index].counter += 1;
    updatedCircles[index].backgroundColor = getRandomColor();
    setCircles(updatedCircles);
  };

  const duplicateCircle = (index) => {
    if (circles.length >= 10) return; // Maximum of 10 circles
    const updatedCircles = [...circles];
    const newCircle = { counter: 0, backgroundColor: updatedCircles[index].backgroundColor };
    updatedCircles.splice(index + 1, 0, newCircle); // Insert new circle to the right
    setCircles(updatedCircles);
  };

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const circleSize = Math.min(window.innerWidth, window.innerHeight) * 0.1;

  const rowContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `calc(50vh - ${circleSize}px)`,
  };

  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 10px',
  };

  const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: circleSize,
    height: circleSize,
    borderRadius: '50%',
  };

  const buttonStyle = {
    display: 'block',
    margin: '0 auto',
    marginTop: '20px',
  };

  const counterStyle = {
    textAlign: 'center',
    fontSize: '24px',
  };

  const colorStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={rowContainerStyle}>
        <div style={circleContainerStyle}>
          {circles.map((circle, index) => (
            <div key={index} style={{ ...circleStyle, backgroundColor: circle.backgroundColor }}>
              <div style={counterStyle}>{circle.counter}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={rowContainerStyle}>
        <button style={buttonStyle} onClick={() => incrementCounter(0)}>Button 1</button>
        <button style={buttonStyle} onClick={() => duplicateCircle(0)}>Button 2</button>
      </div>
      <div style={rowContainerStyle}>
        <div style={colorStyle}>Current Background Color: {circles[0].backgroundColor}</div>
      </div>
    </div>
  );
};

export default CircleButton;
