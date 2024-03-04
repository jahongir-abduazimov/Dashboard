"use strict";

let userBtn = $('.user-btn');
let userForm = $('.user-form');
let toggleBtn = $('.toggle-btn');
let aside = $('.aside');
let navMenu = $('.nav-menu');

userBtn.addEventListener('click', () => {
    userForm.classList.toggle('user-form-toggle')
})

toggleBtn.addEventListener('click', () => {
    aside.classList.toggle('aside-toggle')
})


function renderNavMenu(data) {
    if (data.length) {
        data.forEach((el) => {
            let list = createElement('li', 'rounded-lg hover:bg-indigo-100', `
                        <a href="${el.link}" class="flex items-center gap-3 p-2">
                            <span class="text-[22px] text-indigo-600"><i class="bi ${el.icon}"></i></span>
                            <span class="font-semibold text-[20px] text-indigo-600">${el.title}</span>
                        </a>
            `)
            navMenu.appendChild(list)
        })
    }
}

renderNavMenu(navigatorMenu)

(function(){
    let token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '../../pages/login.html'
    }
}())


function logOut() {
    localStorage.removeItem('token');
    window.location.href = '../../pages/login.html'
}
