function login(){
   var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if(username=="Admin" && password=="Katsina"){
        document.getElementById('link').href = "home.html";
    }
    else{
        document.getElementById('error').innerHTML = "Invalid Username/Password";
        document.getElementById('error').style = "color:red";

    }
}

// function add(x, y){
//     return x+y;
// }

// add(12, 23);

