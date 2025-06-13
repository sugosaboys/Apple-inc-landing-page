const hamburger = document.querySelector('.hamburger');
const Closebtn = document.querySelector('.closebtn');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
     navMenu.classList.add('nav-show');
     document.body.style.overflow = 'hidden';
});

Closebtn.addEventListener('click',()=>{
     navMenu.classList.remove('nav-show');
      document.body.style.overflow = 'auto';
});

const inovasiContainer = document.querySelectorAll('.inovasi-container');
const active = document.querySelector('.active');

inovasiContainer.forEach((container)=>{
  container.addEventListener('click',(c)=>{
     removeActives();
     active.classList.remove('active');
     container.classList.add('width-normal');
  });
});

function removeActives(){
    inovasiContainer.forEach((c)=>{
         c.classList.remove('width-normal');
    });
};

const img = document.getElementById('nav-img');
const links = document.querySelectorAll('.hover-link');

links.forEach(link => {
     link.addEventListener('mouseenter',()=>{
          const newSRC = link.getAttribute('data-img');
          img.src = newSRC;
     });

     link.addEventListener('mouseleave',()=>{
          img.src = './gif/apple-logo.jpeg';
     });
})
