function show(){
  menu = document.querySelector('.menu')
  hamburguer = document.querySelector('.hamburguer')
  x = document.querySelector('.x')
 
  menu.style.display = 'none'
  hamburguer.style.display = 'none'
  x.style.display = 'block'
}

function fechar(){
  menu = document.querySelector('.menu')
  hamburguer = document.querySelector('.hamburguer')
  x = document.querySelector('.x')
 
  x.style.display = 'none'
  menu.style.display = 'flex'
  hamburguer.style.display = 'block'
}