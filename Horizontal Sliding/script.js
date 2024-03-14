const imgCon = document.querySelector('.gallery div');
const leftarr = document.querySelector('.left'),
    rightarr = document.querySelector('.right');

imgCon.addEventListener("wheel",(e) => {
    e.preventDefault();
    if (window.scrollX < 810){
        leftarr.style.cursor = 'none';
        rightarr.style.cursor = 'pointer';
    }
    imgCon.scrollLeft += e.deltaY; 
    imgCon.style.scrollBehavior = 'auto';
});

rightarr.addEventListener("click",()=> {
    console.log('clicked!')
    imgCon.scrollLeft += 790;
    imgCon.style.scrollBehavior = 'smooth';
});

leftarr.addEventListener("click",()=> {
    imgCon.scrollLeft -= 790;
    imgCon.style.scrollBehavior = 'smooth';
})