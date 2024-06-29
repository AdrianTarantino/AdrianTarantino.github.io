var app = document.getElementById('animation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

const frcString = 'FIRST Robotics Alumni';
const educationString = 'UofWat EE Class of 2029';
const jobString = 'Lifeguard and Swim Instructor';
const electronicsString = 'Electronics Enthusiast';
const programmingString = 'Hobby Programmer';

const startTime = 500;
const fullTime = 300;
const emptyTime = 500;

typewriter
  .pauseFor(startTime)
  .typeString(educationString)
  .pauseFor(fullTime * 3)
  .deleteChars(educationString.length)
  .pauseFor(emptyTime)

  .typeString(frcString)
  .pauseFor(fullTime * 3)
  .deleteChars(frcString.length)
  .pauseFor(emptyTime)
  
  .typeString(jobString)
  .pauseFor(fullTime * 3)
  .deleteChars(jobString.length)
  .pauseFor(emptyTime)

  .typeString(electronicsString)
  .pauseFor(fullTime * 3)
  .deleteChars(electronicsString.length)
  .pauseFor(emptyTime)

  .typeString(programmingString)
  .pauseFor(fullTime * 3)
  .deleteChars(programmingString.length)
  .pauseFor(emptyTime)

  .start();