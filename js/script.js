document.getElementById ('btn-submit').addEventListener ('click',function(){
    const emailUser =document.getElementById('email-user');
    const email = emailUser.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(email,password);
    if(email === 'mostafiz@gmail.com' && password === 'mostafiz181' ){
       console.log('valid user')
    }else{
        console.log('invalid user')
    }
})