burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
})