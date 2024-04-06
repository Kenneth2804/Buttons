const enterButton = document.querySelector('.enter-button');
const loaderContainer = document.getElementById('loaderContainer');
const loaderGif = document.querySelector('.loader-gif');

enterButton.addEventListener('click', (event) =>{

event.preventDefault();

 loaderContainer.style.display = 'flex';

setTimeout(() =>{

    loaderContainer.style.display = 'none';
    
    window.location.href = 'components/home.html';
},3000)

});

enterButton.addEventListener('mouseover', ()=>{
    enterButton.style.transform = 'scale(1.6)';
});

enterButton.addEventListener('mouseout', ()=>{
    enterButton.style.transform = 'scale(1)';
});
