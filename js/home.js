const f = {
    logout: ()=> document.getElementById('logout')
}

f.logout().addEventListener('click', ()=>{
    
    firebase.auth().signOut()
    .then(()=>{
        alert('Logout Realizado com sucesso.')
        window.location.href = "../index.html"
    })
    .catch(erro => {
        alert(erro.code)
    })
})