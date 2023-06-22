let form = document.querySelector('form');
form.addEventListener('submit', Submit);

function Submit (e){
e.preventDefault();

let input = document.querySelector('input');
let ul = document.querySelector('ul')
let li = document.createElement('li')
let button = document.createElement('button');
button.classList.add('btn','btn-danger','btn-sm');
button.textContent = 'X'
li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
li.textContent = input.value;

li.append(button);
ul.append(li);
input.value = '';
 
let clearButton = document.querySelector('.btn-md');
clearButton.classList.remove('d-none');

button.addEventListener('click',(e)=>{
    let clickedElement = e.target;
    clickedElement.parentElement.remove();
})
clearButton.addEventListener('click',(e)=>{
li.remove();
clearButton.classList.add('d-none')
})


}

