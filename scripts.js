const Robocar ={
    buttonPoli: {
       id: 'buttonPoli',
      title: 'Poli',
      img: './images/Poli.jpg',
      description: 'Главный герой, полицейский автомобиль. Смелый, быстрый и ловкий, следит за порядком в городе.'
    },

    buttonAmber: {
      id: 'buttonAmber',
      title: 'Amber',
      imgSrc: './images/Amber.jpg',
      description: 'Машина скорой медицинской помощи. Умная, добрая и отзывчивая.'
    },

    buttonRoy: {
      id: 'buttonRoy',
      title: 'Roy',
      imgSrc: './images/Roy.jpg',
      description: 'Пожарная машина. Самый сильный из героев, иногда выступает в амплуа подъёмного крана.'
     },

    buttonHelli: {
      id: 'buttonHelli',
      title: 'Helli',
      imgSrc: './images/Helli.jpg',
      description:'Спасательный вертолёт. Любопытный и упрямый, с хорошей памятью.'
         }
};

    
    const createListItem = (buttonName) => `<button class="button">
    <a class="item__link" href="#${buttonName.title.replace(' ', '-').toLowerCase()}"
      data-number=${buttonName.id}>${buttonName.title}
    </a>
  </button>`;
  
  const generateMenu = (data) => {
    
    const list = document.querySelector('.list');
      
    const content = Object.values(data).reduce((acc, item) => {
      acc += createListItem(item);
      return acc;
    }, '');
  
    list.innerHTML = content;
  };
  
  const changeContent = (propName) => {
    const content = document.getElementById('content');
  
    content.innerHTML = `
    <img class="content__image" src="${Robocar[propName].imgSrc}" alt="picture of ${Robocar[propName].title}">
    <div>
    <h1 class="content__title">${Robocar[propName].title}</h1>
    <p class="content__description">${Robocar[propName].description}</p>
    </div>`;
  };
  
  const list = document.querySelector('.list'); // object
  
  list.addEventListener('click', (event) => {
    if (!event.target.classList.contains('item__link')) return;
  
    const linkNumber = event.target.dataset.number;
  
    changeContent(linkNumber);
  });
  
  generateMenu(Robocar);


let burger = document.querySelector('.burger');
let button2 = document.querySelector('.next__button');
let content = document.querySelector('.content');
  
let buttonPoli =  document.querySelector(".Poli2");
let buttonAmber =  document.querySelector(".Amber2");
let buttonRoy =  document.querySelector(".Roy2");
let buttonHelli =  document.querySelector(".Helli2");

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    button2.classList.toggle('active');
    content.classList.toggle('active');
    buttonPoli.classList.toggle('active');
    buttonAmber.classList.toggle('active');
    buttonRoy.classList.toggle('active');
    buttonHelli.classList.toggle('active');
})


buttonPoli2.addEventListener('click', function () {
  return {
    buttonPoli
  }
})
