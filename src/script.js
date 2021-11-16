let $ = document;

function toggleTheme_colors() {
    let theme = $.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') === 'res/css/stylesheet(light-mode).css') {
        theme.setAttribute('href', 'res/css/stylesheet(dark-mode).css');
    } else {
        theme.setAttribute('href', 'res/css/stylesheet(light-mode).css');
    }
}

function toggleTheme_background() {
    let background = $.getElementsByClassName('head-background')[0];
    if (background.getAttribute('src') === 'res/images/bg-desktop-light.jpg') {
        background.setAttribute('src', 'res/images/bg-desktop-dark.jpg');
    } else {
        background.setAttribute('src', 'res/images/bg-desktop-light.jpg');
    }
}

function toggleTheme_icon() {
    let icon = $.getElementsByClassName('header-toggle_icon')[0];
    if (icon.getAttribute('src') === 'res/images/icon-moon.svg') {
        icon.setAttribute('src', 'res/images/icon-sun.svg');
    } else {
        icon.setAttribute('src', 'res/images/icon-moon.svg');
    }
}


let myInput = $.querySelector('input');
let addToForm = $.querySelector('.checklist_adder-form');
let itemsLeft = $.querySelector('.checklist-controlBoard-remaining_items');

//let itemsR = $.getElementsByTagName('li').length -1

function todo(realInput) {
    let todoLi = $.createElement('li');
    todoLi.className = 'checklist-list-ul-li';

    let todoDiv = $.createElement('div');
    todoDiv.className = 'checklist-list-ul-li-statue';

    //todoDiv.addEventListener('click',function (event){
    //    event.target.parentElement.classList.toggle('line-maker');
    //    event.target.classList.toggle('circleFill');
    //})

    let todoSpan = $.createElement('span');
    todoSpan.className = 'checklist-list-ul-li-txt';
    todoSpan.innerHTML = realInput;
    todoLi.addEventListener('click', function (event) {
        event.target.children[1].classList.toggle('line-maker');
        event.target.children[0].classList.toggle('circleFill')
    })

    let todoImg = $.createElement('img');
    todoImg.className = 'checklist-list-ul-li-remove';
    todoImg.setAttribute('src', 'res/images/icon-cross.svg')
    todoImg.setAttribute('alt', 'cross_icon')

    todoImg.addEventListener('click', function (event) {
        event.target.parentElement.remove()
        itemsLeft.innerHTML = counter() + ' items left'
    })

    todoLi.appendChild(todoDiv)
    todoLi.appendChild(todoSpan)
    todoLi.appendChild(todoImg)

    let todoUl = $.querySelector('ul');
    todoUl.appendChild(todoLi)
}

addToForm.addEventListener('submit', function (event) {
    event.preventDefault()
})
myInput.addEventListener('keydown', function (event) {
    let realInput = event.target.value.trim();
    // با target اومدیم object چیزی رو که می خواستیم رو بیرون کشیدیدم
    if (event.keyCode === 13) {
        if (realInput === '') {
            alert('میشه خالی enter نزنی اَه مرسی ')
        } else {
            myInput.value = '';
            todo(realInput)
            counter()
            itemsLeft.innerHTML = counter() + ' items left'
        }
    }
})

function counter() {
    return $.getElementsByTagName('li').length
}