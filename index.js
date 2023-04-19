// let form = document.querySelector('#todo_form')
// .addEventListener('click', (e) => console.log(e));

document.querySelector('#alert')
.addEventListener('click', () => alert('alerted'));

function handleDelete(e) {
    e.target.parentNode.remove();
}

let buttons = document.getElementsByClassName('btn-del');

/* no fn works the same
for (let button of buttons) {
    button.addEventListener('click', () => button.parentNode.remove());
} */

for (let button of buttons) {
    button.addEventListener('click', handleDelete);
}

// waits for dom to load
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // otherwise the page resets
        buildToDo(e.target.new_todo.value);
        form.reset(); // to prevent the previous entry to show
    })
})

function buildToDo(todo) {
    let p = document.createElement('p');
    p.textContent = `${todo} `;

    let btn = document.createElement('button');
    btn.textContent = ' X ';
    btn.classList = 'btn-del';
    btn.addEventListener('click', handleDelete);

    p.appendChild(btn);

    document.querySelector('#todo_container').appendChild(p);

}
