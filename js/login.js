const f = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    btn_login: () => document.getElementById('btn_login')
}


f.btn_login().addEventListener('click', () => {


   
    firebase.auth().signInWithEmailAndPassword(f.email().value, f.password().value)
        .then(res => {
            // alert("LOGIN REALIZADO COM SUCESSO.")
            window.location.href = "pg/home.html"
        })
        .catch( erro => {
            alert(getErrorMessage(erro))
            console.log(erro.code)
        })

})


function getErrorMessage(erro) {
    if (erro.code == "auth/user-not-found") {
        return "Usuário não encontrado!"
    }

    if (erro.code == "auth/wrong-password") {
        return "Senha inválida!"
    }

    if (erro.code == "auth/too-many-requests") {

        return "O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login malsucedidas."

    }

    if (erro.code == "auth/invalid-email") {
        return "Email inválido"
    }

    if (erro.code == "auth/missing-email") {
        return "O campo Email está vazio!"
    }


    return erro.message;
}