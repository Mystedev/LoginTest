const Form = document.getElementById('formulario')

Form.addEventListener('submit',MostrarDatos)
  function MostrarDatos(e){
    e.preventDefault()
    const UserLogin = document.getElementById('input-login').value
    const UserPassword = document.getElementById('input-password').value

    console.log(UserLogin,UserPassword)

    const  respuesta = document.getElementById( 'respuesta' )
    respuesta.textContent = `Hola ${UserLogin} bienvenido`
  }








