const yo = require('yo-yo');


module.exports = yo`<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hide-on-small-only">
            <img src="iphone.png" class="iphone" alt="">
          </div>
          <!-- /IMAGEN-->

          <!-- SIGNIN-->
          <div class="col s12 m7">
            <div class="row">
              <div class="signup-box">
              <h1 class="platzigram">Doggi</h1>
              <form class="signup-form">
                <h2>La primera red social para mascotas</h2>
                <div class="section">
                  <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                  <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                </div>
                <div class="divider"></div>
                  <div class="section">
                    <input type="email" name="email" placeholder="Correo Electrónico">
                    <input type="text" name="name" placeholder="Nombre Completo">
                    <input type="email" name="username" placeholder="Nombre de usuario">
                    <input type="email" name="username" placeholder="Nombre de usuario">
                    <input type="password" name="password" placeholder="Contraseña">
                    <button type="submit" name="button" class="btn waves-effect waves-light btn-signup">Regístrate</button>
                  </div>
                </form>
              </div>
            </div>
            <!-- /SIGNIN-->
            <!-- SIGNUP-->
            <div class="row">
              <div class="login-box">
                ¿Tienes una cuenta? <a href="/signin">Entrar</a>
              </div>
            </div>
            <!-- /SIGNUP-->
          </div>
        </div>
      </div>
    </div>
  </div>`
