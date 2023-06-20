let mainImg = document.querySelector('.mainImg img');
let gallery = document.querySelectorAll('.gallery img');





gallery.forEach(element => {
    element.addEventListener('click',()=>{
let src = element.getAttribute('src');
mainImg.setAttribute('src', src);

    })
});



mainImg.addEventListener('click',()=>{
 let src=   mainImg.getAttribute('src');
    let selected = document.querySelector('.selected img');
    selected.setAttribute('src',src);

    let selectedDiv = document.querySelector('.selected');
    selectedDiv.style.display = 'block';

    selectedDiv.addEventListener('click',()=>{
        selectedDiv.style.display = 'none';
    })
})
