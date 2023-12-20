function loginUser(){
    
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;

    fetch('http://127.0.0.1:8000/loginMember',{
        method: 'POST',
        body: {
            'email':email,
            'password':password
        },
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => {
        console.log(response)
    })

}