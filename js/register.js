const Submission = async () => {
    const mail = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const passwordCheck = document.getElementById('ConfirmPassword').value;

    if(password == passwordCheck){
        var message = "";
        const obj = {'email':mail , 'password': password}
        console.log(obj);
        await fetch('http://localhost:3000/user/signup',{
            method: 'POST',
            headers:{
                "Content-type": 'application/json'
            },
            body:JSON.stringify(obj),
        }).then(response => response.json())
        .then(data => {
            console.log("success",data)
            message = data.message;
        }).catch(err => {
            console.error('failure',err)
        })
        if(message === "user created"){
            alert('user created');
            window.location.href = "http://127.0.0.1:5501/login.html"
        }
        else{
            console.log(message);
        }
    }else{
        const register_container = document.getElementById('register_container');
        let template_holder = '';

        template_holder +=`<div class="alert alert-warning alert-dismissible fade show">
                            <strong>Warning!</strong> Entered Password Doesn't match.
                            </div>`

        register_container.innerHTML = template_holder;
    }
}