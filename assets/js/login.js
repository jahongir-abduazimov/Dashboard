"use strict";

let submitForm = $('#submit-form'),
    userName = $('#username'),
    password = $('#password');

let baseURL = 'https://fakestoreapi.com';

async function authoration() {
    let user = {
        username:userName.value,
        password:password.value
    }

    try {
        if (user.password.trim().length == 0 || user.username.trim().length == 0) {
            alert('Please fill all the fields')
        } else {
            let response = await fetch(`${baseURL}/auth/login`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            let result = await response.json()
            localStorage.setItem('token', result.token)

            if (localStorage.getItem('token')) {
                window.location.href = '../../index.html'
            }
        }
    } catch (err) {
        console.log(err);
    }
}

submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    authoration()
})