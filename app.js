const days = document.querySelectorAll('[data-day="day"]');
const bars = document.querySelectorAll('.bar');

async function getData() {
  const API_URL = './data.json';
  fetch(API_URL)
    .then(response => response.json())
    .then(data => setDate(data));
}


function setDate(data) {
  days.forEach((day, index) => {
    day.textContent = data[index].day
  })
  bars.forEach((bar, index) => {
    bar.style.height = data[index].amount + '%'
    bar.addEventListener('mouseover', (e) => {
      const popup = document.querySelector('.popup');
      const popupTitle = document.querySelector('.popup-title');
      popupTitle.textContent = '$' + e.target.style.height.slice(0,5);
    });
  })
}

getData();