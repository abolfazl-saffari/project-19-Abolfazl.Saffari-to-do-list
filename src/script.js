function toggleTheme_colors() {
    let theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') === 'res/css/stylesheet(light-mode).css') {
        theme.setAttribute('href', 'res/css/stylesheet(dark-mode).css');
    } else {
        theme.setAttribute('href', 'res/css/stylesheet(light-mode).css');
    }
}

function toggleTheme_background() {
    let background = document.getElementsByClassName('head-background')[0];
    if (background.getAttribute('src') === 'res/images/bg-desktop-light.jpg') {
        background.setAttribute('src', 'res/images/bg-desktop-dark.jpg');
    } else {
        background.setAttribute('src', 'res/images/bg-desktop-light.jpg');
    }
}

function toggleTheme_icon() {
    let icon = document.getElementsByClassName('header-toggle_icon')[0];
    if (icon.getAttribute('src') === 'res/images/icon-moon.svg') {
        icon.setAttribute('src', 'res/images/icon-sun.svg');
    } else {
        icon.setAttribute('src', 'res/images/icon-moon.svg');
    }
}

let listRemover = document.getElementsByClassName("checklist-list-ul-li-cross_icon");
let i;
for (i = 0; i < listRemover.length; i++) {
    listRemover[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function new_Element() {
    let li_maker = document.createElement('li');
    li_maker.className = 'checklist-list-ul-li';
    let inputValue = document.getElementById('my_input').value;
    let t = document.createTextNode(inputValue)
    let div_maker01 = document.createElement('div');
    div_maker01.className = 'checklist-list-ul-li-check_&_circle_icon';
    let div_maker02 = document.createElement('div');
    div_maker02.className = 'checklist-list-ul-li-todo';
    let div_maker03 = document.createElement('div');
    div_maker03.className = 'checklist-list-ul-li-cross_icon';
    let divInside = document.createElement('div');
    divInside.className = 'checklist-list-ul-li-check_&_circle_icon-icon'
    let pInside = document.createElement('p');
    pInside.appendChild(t);
    let imgInside = document.createElement('img');
    imgInside.setAttribute('src', 'res/images/icon-cross.svg')
    imgInside.setAttribute('alt', 'cross_icon')
    li_maker.appendChild(div_maker01);
    li_maker.appendChild(div_maker02);
    li_maker.appendChild(div_maker03);
    div_maker01.appendChild(divInside);
    div_maker02.appendChild(pInside);
    div_maker03.appendChild(imgInside);
    console.log(li_maker);

    if (inputValue === '') {
        alert("یادت رفت چیزی بنویسی !!!!");
    } else {
        document.getElementById('my_UL').appendChild(li_maker)
    }
    document.getElementById('my_input').value='';
    for (i = 0; i < listRemover.length; i++) {
        listRemover[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//let reamingItems = document.getElementsByClassName('checklist-controlBoard-remaining_items')[0];
//reamingItems.innerHTML =  document.getElementsByTagName('li').length + ' items left'