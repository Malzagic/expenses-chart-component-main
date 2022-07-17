const days = document.querySelectorAll('[data-day="day"]');
const bars = document.querySelectorAll('.bar');

async function getData() {
  const API_URL = './data.json';
  fetch(API_URL)
    .then(response => response.json())
    .then(data => setData(data));
}


function setData(data) {

  createElements();

  days.forEach((day, index) => {

    day.textContent = data[index].day

  });

  bars.forEach((bar, index) => {

    bar.style.height = data[index].amount + '%'

  });

}

const createElements = () => {

  const div = document.createElement('div');
  const p = document.createElement('p');
  const columns = document.querySelectorAll('.column');


  columns.forEach(column => {

    column.addEventListener('mouseover', e => {

      if(e.target.classList.contains('bar')){
        e.target.appendChild(div);
        div.classList.add('popup', 'active');
        div.appendChild(p);
        p.classList.add('popup-title');
        p.textContent = '$' + e.target.style.height.slice(0,5);
      }

    });

    column.addEventListener('mouseout', e => {

      if(!e.target.classList.contains('bar')){
        div.remove();
      }

    });

  });

}

window.onload = function todayDay() {
  const date = new Date();
  const today = date.getDay();

  bars[today].classList.add('today');

  const spans = document.querySelectorAll('.bar');
  const div = document.createElement('div');
  const p = document.createElement('p');

  spans.forEach(span => {

      if(span.classList.contains('today')) {

      span.appendChild(div);
      div.classList.add('popup', 'active');
      div.appendChild(p);
      p.classList.add('popup-title');
      p.textContent = '$' + span.style.height.slice(0,5);

    }

  });
}

getData();