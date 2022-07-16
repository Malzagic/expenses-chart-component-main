const days = document.querySelectorAll('[data-day="day"]');
const bars = document.querySelectorAll('.bar');

async function getData() {
  const API_URL = './data.json';
  fetch(API_URL)
    .then(response => response.json())
    .then(data => setDate(data));
}


function setDate(data) {

  createElements();

  days.forEach((day, index) => {
    day.textContent = data[index].day
  })
  bars.forEach((bar, index) => {
    bar.style.height = data[index].amount + '%'

    bar.addEventListener('mouseover', e => {
      const popup = document.querySelector('.popup');
      const popupTitle = document.querySelector('.popup-title');

      popup.classList.add('active')
      popupTitle.textContent = '$' + e.target.style.height.slice(0,5);
    });

    bar.addEventListener('mouseout', (e) => {
      const popup = document.querySelector('.popup');

      if(!bar.classList.contains('today')) {
        popup.classList.remove('active');
      }
    });
  })

}

const createElements = () => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const columns = document.querySelectorAll('.column');

  columns.forEach(column => {
    column.addEventListener('mouseover', e => {

      if(!e.target.classList.contains('column')) return;
      e.target.appendChild(div);
      div.classList.add('popup');
      div.appendChild(p);
      p.classList.add('popup-title');
    });
  });
}

window.onload = function todayDay() {
  const date = new Date();
  const today = date.getDay();

  bars[today].classList.add('today');
}

getData();