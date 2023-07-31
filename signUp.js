var nameValid = /^[a-zA-Z0-9]{3,}$/;
var emailValid = /(^[a-zA-Z0-9]+)(@)([a-zA-Z0-9]+)(\.com)$/;
var checkName, checkMail;

var Name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');

var UsersArray = [];

function signUP() {
    checkName = nameValid.test(Name.value);
    checkMail = emailValid.test(email.value);

    var UserObject = {
        name: Name.value,
        email: email.value,
        password: password,
    }
    
    if (search(UserObject.email)) {
        document.getElementById("p1").innerHTML = "there is such email";
    }

    else if (!search(UserObject.email)) {
        {
            console.log("search   " + search(UserObject.email));
            if (checkName && checkMail) {
                UsersArray.push(UserObject);
                localStorage.setItem("Users", JSON.stringify(UsersArray));
                console.log(UsersArray);
                clear();
                window.location.href = "signIN.html";
            }
            else if (checkName == false) {
                document.getElementById("p1").innerHTML = "enter mail like this ahmed22";
            }
            else if (checkMail == false) {
                document.getElementById("p1").innerHTML = "enter name like this example@gmail.com";
            }
        }
    }
}

function clear() {
    Name.value = "";
    email.value = "";
    document.getElementById("p1").innerHTML = "";
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
