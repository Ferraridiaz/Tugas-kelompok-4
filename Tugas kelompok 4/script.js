'use strict';

function clear(id){
    document.getElementById(id).value ="";
}

function login(e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "kelompok-4" && password === "kelompok-4"){
        alert("Login berhasil");
    }else{
        alert("Login gagal");
    }
    clear("username");
    clear("password");
}


function signUp(e){
    e.preventDefault();
    const username = document.getElementById("username-sign-up").value;
    const password = document.getElementById("password-sign-up").value;
    const email = document.getElementById("email-user").value;
    if (username === "kelompok-4" && password === "kelompok-4" && email === "kelompok4@gmail.com"){
        alert("Sign UP berhasil");
    }else{
        alert("Sign Up gagal");
    }
    clear("username-sign-up");
    clear("password-sign-up");
    clear("email-user")
}