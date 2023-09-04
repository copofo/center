const f = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    btn_login: () => document.getElementById('btn_login')
}

f.btn_login().addEventListener('click')
firebase.auth().signInWithEmailAndPassword(f.email.value, f.password.value)
.then(user => {
    alert("LOGIN REALIZADO COM SUCESSO.")
})
.catch(erro =>{
    console.log(erro)
})