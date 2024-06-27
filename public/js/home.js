function show(){
  menu = document.querySelector('.menu')
  hamburguer = document.querySelector('.hamburguer')
  x = document.querySelector('.x')
  cart = document.querySelector('.cart')
  title = document.querySelector('.title')
  textMenu = document.querySelector('.text-menu')


  menu.style.display = 'flex'
  hamburguer.style.display = 'none'
  x.style.display = 'block'
  title.style.display = 'none'
  cart.style.display = 'none'
  textMenu.style.display = 'block'
}

function fechar(){
  menu = document.querySelector('.menu')
  hamburguer = document.querySelector('.hamburguer')
  x = document.querySelector('.x')
  cart = document.querySelector('.cart')
  title = document.querySelector('.title')
  textMenu = document.querySelector('.text-menu')
  
 
  x.style.display = 'none'
  menu.style.display = 'none'
  hamburguer.style.display = 'block'
  title.style.display = 'flex'
  cart.style.display = 'block'
  textMenu.style.display = 'none'
}

  const imgs = document.querySelector('#img-carrosel');
  const img = document.querySelectorAll('#img-carrosel img');

  let idx = 0;

  function carroselRight() {
    idx++;
    if (idx > img.length - 1) {
      idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 88}px)`;
  }

  function carroselLeft() {
    idx--;
    if (idx < 0) {
      idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 88}px)`; // Movimento para a esquerda
  }