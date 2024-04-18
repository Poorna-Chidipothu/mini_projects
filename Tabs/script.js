const tabs = document.querySelectorAll('.tab_btn'),
    contents = document.querySelectorAll('.content');

    tabs.forEach((tab,ind)=>{
        tab.addEventListener('click',(e)=>{
            tabs.forEach((t)=>{t.classList.remove('active')})
            tab.classList.add('active');

            const line = document.querySelector('.line');
            line.style.width = e.target.offsetWidth + 'px';
            line.style.left = e.target.offsetLeft + 'px';

            contents.forEach((con)=>{con.classList.remove('active')});
            contents[ind].classList.add('active');
            console.log(ind);
        })
        
        
    });