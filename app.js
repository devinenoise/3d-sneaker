//Movement Animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Moving Animation Event
container.addEventListener('mousemove', e => {
  console.log(e);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
