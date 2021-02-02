

var Submission = async () =>{
    var variableOne = "";
    var errorMessage = "";
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const obj = { "email" : mail, "password" : password};
    console.log(obj)
    await fetch('http://localhost:3000/user/login',{
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(obj),
    })
    .then(response => response.json())
    .then(data => {
        console.log("success:", data);
        variableOne = data.token;
        localStorage.setItem("vOneLocalStorage", variableOne);
        errorMessage = data;
    })
    .catch(err => {
        console.error("error:", err);
    });
    if(variableOne){
        window.location.href = "http://127.0.0.1:5501/blog.html";
    }
    else{
        console.log(errorMessage)
    }
}
