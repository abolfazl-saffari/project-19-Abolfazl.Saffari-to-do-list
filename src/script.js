window.onload = function () {
    alert(`با سلام، پشتیان عزیز خیلی کار داره می دونم ولی من تلاش ام رو کردم با تشکر`)
}

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

function todo(realInput) {
    let todoLi = $.createElement('li');
    todoLi.className = 'checklist-list-ul-li';

    let todoDiv = $.createElement('div');
    todoDiv.className = 'checklist-list-ul-li-statue';
    todoDiv.classList.add('circleUnFill')

    let todoSpan = $.createElement('span');
    todoSpan.className = 'checklist-list-ul-li-txt';
    todoSpan.innerHTML = realInput;
    todoLi.addEventListener('click', function (event) {
        event.target.children[1].classList.toggle('line-maker');
        event.target.children[0].classList.remove('circleUnFill');
        event.target.children[0].classList.toggle('circleFill');
        itemsLeft.textContent = counter() - ol() + ' items left'
    })

    let todoImg = $.createElement('img');
    todoImg.className = 'checklist-list-ul-li-remove';
    todoImg.setAttribute('src', 'res/images/icon-cross.svg')
    todoImg.setAttribute('alt', 'cross_icon')

    todoImg.addEventListener('click', function (event) {
        event.target.parentElement.remove()
        itemsLeft.textContent = counter() - ol() + ' items left'
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
    if (event.key === 'Enter') {
        if (realInput === '') {
            alert('میشه خالی enter نزنی اَه مرسی ')
        } else {
            myInput.value = '';
            todo(realInput)
            itemsLeft.textContent = counter() - ol() + ' items left'
        }
    }
})
let ol = function () {
    return $.querySelectorAll('.circleFill').length
}

function counter() {
    return $.querySelectorAll('li').length
}

$.querySelector('.checklist-controlBoard-clear_order').onclick = function () {
    let allCompleted = $.querySelectorAll('.circleFill')
    for (let i = 0; i < allCompleted.length; i++) {
        allCompleted[i].parentElement.remove()
    }
}

//تو گوشی فرستادم که با باید فلیتر کنی class ها خودت رو
let activeOrder = $.querySelector('.checklist-controlBoard-base_orders-active_order')
activeOrder.onclick = function () {
    // if بزن برای بودن خط زیر نبودن آن
    let addDisplayCircleFill = $.querySelectorAll('.circleFill')
    for (let i = 0; i < addDisplayCircleFill.length; i++) {
        addDisplayCircleFill[i].parentElement.classList.add('displayNone')
    }
}

let completedOrder = $.querySelector('.checklist-controlBoard-base_orders-completed_order');
 completedOrder.onclick = function () {
     let addDisplayCircleUnFill = $. querySelectorAll('.circleUnFill')
     for (let i = 0; i <addDisplayCircleUnFill.length; i++) {
           addDisplayCircleUnFill[i].parentElement.classList.add('displayNone')
     }
 }

let allOrder = $.querySelector('.checklist-controlBoard-base_orders-all_order');
 allOrder.onclick = function (){
     let li = $. querySelectorAll('li');
     for (let i = 0; i <li.length; i++) {
         li[i].classList.remove('displayNone')
     }
 }