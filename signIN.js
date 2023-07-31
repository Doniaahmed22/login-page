var email = document.getElementById('email');
var password = document.getElementById('password');
var UsersArray = [];

if (localStorage.getItem('Users') != null) {
    UsersArray = JSON.parse(localStorage.getItem('Users'));
    console.log(UsersArray);
}

function signIN() {

    var UserObject = {
        email: email.value,
        password: password,
    }

    if (search(UserObject.email) == true) {
        clear();
        window.location.href = "home.html";
    }
    else {
        document.getElementById("p1").innerHTML = "wrong email or password";
    }
}

function search(search1) {
    var flag = false;

    for (var i = 0; i < UsersArray.length; i++) {
        if (UsersArray[i].email.includes(search1) ){
            flag=true;
        }
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}

function clear() {
    email.value = "";
    password.value = "";
    document.getElementById("p1").innerHTML = "";
}
