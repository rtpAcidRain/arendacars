import * as flsFunctions from './modules/fucntions.js';
import $ from 'jquery';

flsFunctions.isWebp();

// Burger

const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.navigation__container');
const burgerWrapper = document.querySelector('.navigation__wrapper');
const burgerItem = document.querySelectorAll('.navigation__scroll');

function closeBurger() {
  burgerMenu.classList.remove('burger-menu--open');
}

burgerOpen.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu--open');
});

burgerClose.addEventListener('click', closeBurger);
burgerMenu.addEventListener('click', closeBurger);
burgerWrapper.addEventListener('click', (e) => {
  e.stopPropagation();
});

burgerItem.forEach((el) =>
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const blockID = el.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    closeBurger();
  }),
);

// Стрелка вверх

const arrowButton = document.querySelector('.arrow__up');

window.addEventListener('scroll', (e) => {
  if (scrollY > 230) {
    arrowButton.classList.add('show');
  } else {
    arrowButton.classList.remove('show');
  }
});

// CARS

const cars = [
  {
    id: 0,
    name: 'Dodge Challenger',
    year: 2017,
    persons: 4,
    transmission: 'Автомат',
    doors: 2,
    engine: '2.3',
    price1: '13000',
    price2: '12500',
    price3: '12000',
    img: 'img/park/cars/car1.png',
    category: '1',
  },
  {
    id: 1,
    name: 'Land Rover',
    year: 2017,
    persons: 5,
    transmission: 'Автомат',
    doors: 4,
    engine: '2.3',
    price1: '13000',
    price2: '12500',
    price3: '12000',
    img: 'img/park/cars/car2.png',
    category: '5',
  },
  {
    id: 2,
    name: 'Mercedes S63 AMG',
    year: 2017,
    persons: 4,
    transmission: 'Автомат',
    doors: 2,
    engine: '2.3',
    price1: '13000',
    price2: '12500',
    price3: '12000',
    img: 'img/park/cars/car3.png',
    category: '3',
  },
  {
    id: 3,
    name: 'Ford Mustang',
    year: 2017,
    persons: 4,
    transmission: 'Автомат',
    doors: 2,
    engine: '2.3',
    price1: '13000',
    price2: '12500',
    price3: '12000',
    img: 'img/park/cars/car4.png',
    category: '4',
  },
];

const carsContainer = document.querySelector('.park__container');

const carTemplate = (
  img,
  name,
  year,
  persons,
  transmission,
  doors,
  engine,
  price1,
  price2,
  price3,
) => {
  return `<article class="park__item car">
  <div class="car__image">
    <img src=${img} alt="car" />
  </div>
  <div class="car__info">
    <header>
      <h3 class="title car__title">${name}</h3>
      <p>Год выпуска: ${year}</p>
    </header>
    <main>
      <ul>
        <li>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 1.00001C9.24236 0.998645 9.96846 1.21694 10.5865 1.62728C11.2045 2.03762 11.6866 2.62158 11.972 3.30532C12.2573 3.98906 12.3331 4.74186 12.1896 5.46853C12.0461 6.1952 11.6898 6.8631 11.1659 7.38777C10.6419 7.91245 9.97377 8.27032 9.24594 8.41615C8.51811 8.56198 7.76328 8.48921 7.0769 8.20704C6.39053 7.92487 5.80343 7.44598 5.38986 6.83092C4.97629 6.21586 4.75482 5.49226 4.75345 4.75163V4.74473C4.75345 3.75276 5.14796 2.80132 5.85037 2.09925C6.55279 1.39717 7.50572 1.00183 8.5 1.00001V1.00001ZM8.5 9.87716C12.6935 9.87716 16 12.6635 16 14.0512V16H1V14.0164C1 12.6286 4.30606 9.87716 8.5 9.87716Z"
              stroke="#448FFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>${persons} места</span>
        </li>
        <li>
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 8V14H2V8H6V14H7V8H11H12V7V1H11V7H7V1H6V7H2V1H1V7V8Z"
              fill="#448FFF"
            />
            <path
              d="M1 14H0.5V14.5H1V14ZM2 14V14.5H2.5V14H2ZM2 8V7.5H1.5V8H2ZM6 8H6.5V7.5H6V8ZM6 14H5.5V14.5H6V14ZM7 14V14.5H7.5V14H7ZM7 8V7.5H6.5V8H7ZM12 8V8.5H12.5V8H12ZM12 1H12.5V0.5H12V1ZM11 1V0.5H10.5V1H11ZM11 7V7.5H11.5V7H11ZM7 7H6.5V7.5H7V7ZM7 1H7.5V0.5H7V1ZM6 1V0.5H5.5V1H6ZM6 7V7.5H6.5V7H6ZM2 7H1.5V7.5H2V7ZM2 1H2.5V0.5H2V1ZM1 1V0.5H0.5V1H1ZM1.5 14V8H0.5V14H1.5ZM2 13.5H1V14.5H2V13.5ZM1.5 8V14H2.5V8H1.5ZM6 7.5H2V8.5H6V7.5ZM6.5 14V8H5.5V14H6.5ZM7 13.5H6V14.5H7V13.5ZM6.5 8V14H7.5V8H6.5ZM11 7.5H7V8.5H11V7.5ZM12 7.5H11V8.5H12V7.5ZM11.5 7V8H12.5V7H11.5ZM12.5 7V1H11.5V7H12.5ZM12 0.5H11V1.5H12V0.5ZM10.5 1V7H11.5V1H10.5ZM7 7.5H11V6.5H7V7.5ZM6.5 1V7H7.5V1H6.5ZM6 1.5H7V0.5H6V1.5ZM6.5 7V1H5.5V7H6.5ZM2 7.5H6V6.5H2V7.5ZM1.5 1V7H2.5V1H1.5ZM1 1.5H2V0.5H1V1.5ZM1.5 7V1H0.5V7H1.5ZM1.5 8V7H0.5V8H1.5Z"
              fill="#448FFF"
            />
          </svg>
          <span>${transmission}</span>
        </li>
        <li>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.4737 10C13.4737 9.53976 13.1006 9.16667 12.6404 9.16667H11.7807C11.3205 9.16667 10.9474 9.53976 10.9474 10C10.9474 10.4602 11.3205 10.8333 11.7807 10.8333H12.6404C13.1006 10.8333 13.4737 10.4602 13.4737 10ZM16 14C16 14.5523 15.5523 15 15 15H1C0.447715 15 0 14.5523 0 14V7.08395C0 6.81692 0.106799 6.56098 0.296605 6.37315L6.4446 0.289201C6.63182 0.103925 6.88459 0 7.14799 0H15.1579C15.3812 0 15.5954 0.0877973 15.7534 0.244078C15.9113 0.400358 16 0.61232 16 0.833333V14ZM7.84694 1.66667C7.58354 1.66667 7.33077 1.77059 7.14354 1.95587L4.11197 4.95587C3.47691 5.5843 3.92193 6.66667 4.81536 6.66667H13.3158C13.8681 6.66667 14.3158 6.21895 14.3158 5.66667V2.66667C14.3158 2.11438 13.8681 1.66667 13.3158 1.66667H7.84694Z"
              fill="#448FFF"
            />
          </svg>
          <span>${doors} двери</span>
        </li>
        <li>
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.90909 0V1.625H7.36364V3.25H4.90909L3.27273 4.875V7.3125H1.63636V4.875H0V11.375H1.63636V8.9375H3.27273V11.375H5.72727L7.36364 13H13.9091V9.75H15.5455V12.1875H18V4.0625H15.5455V6.5H13.9091V3.25H9V1.625H11.4545V0H4.90909Z"
              fill="#448FFF"
            />
          </svg>
          <span> Объем ${engine}</span>
        </li>
      </ul>
    </main>
  </div>
  <div class="car__price">
    <p class="price__count text--white">Цена: ${price1} руб в сутки</p>
    <ul>
      <li>от 2 дней - ${price2} руб./сутки</li>
      <li>от 3 дней - ${price3} руб./сутки</li>
    </ul>
    <div class="price__buttons">
      <a href="/" class="button text--white order-car__button" onclick="openModal(event)">
        Заказать
      </a>
    </div>
  </div>
</article>`;
};

let selectedCars = cars;

function setCars() {
  carsContainer.innerHTML = '';
  return (carsContainer.innerHTML = selectedCars
    .map((el) => {
      return carTemplate(
        el.img,
        el.name,
        el.year,
        el.persons,
        el.transmission,
        el.doors,
        el.engine,
        el.price1,
        el.price2,
        el.price3,
      );
    })
    .join(''));
}

setCars();

const container = document.querySelectorAll('.category');

container.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    container.forEach((but) => {
      but.classList.remove('selected');
    });
    el.classList.add('selected');
    if (el.dataset.category === '6') {
      selectedCars = cars;

      setCars();
    } else {
      selectedCars = cars.filter((car) => car.category == el.dataset.category);
      setCars();
    }
  });
});

// Modal

const modalCloseButton = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');
const modalCheck = document.querySelector('.modal__check');
function closeModalCar() {
  carModal.childNodes[1].style.transform = 'rotateX(90deg)';
  setTimeout(() => {
    carModal.style.display = 'none';
  }, 500);
}

modalCloseButton.addEventListener('click', () => {
  closeModalCar();
});

carModal.addEventListener('click', () => {
  closeModalCar();
});

carModal.childNodes[1].addEventListener('click', (e) => {
  e.stopPropagation();
});

// PHP

$('#orderCarForm').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'php/mailCarForm.php',
    data: $(this).serialize(),
  }).done(function () {
    modalForm.style.display = 'none';
    modalCheck.style.display = 'flex';
  });
  return false;
});

$('#footerForm').on('submit', function (event) {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    url: 'php/mailFeedbackForm.php',
    data: $(this).serialize(),
  }).done(function () {
    $('#footerForm').trigger('reset');
  });
  return false;
});
