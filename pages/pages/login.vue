<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <form>
        <b-row class="justify-content-center">
          <b-col md="8">
            <b-card-group>
              <b-card
                no-body
                class="p-4">
                <b-card-body>
                  <h1>Iniciar Sesión</h1>
                  <p class="text-muted">Inicia sesión con tu cuenta</p>
                  <b-input-group>
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"/></b-input-group-text></b-input-group-prepend>
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="E-Mail"
                      required>
                  </b-input-group>
                  <span
                    v-if="error.email"
                    class="help-block text-danger">
                    {{ error.email[0] }}
                  </span>
                  <b-input-group class="mt-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"/></b-input-group-text></b-input-group-prepend>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required>
                  </b-input-group>
                  <span
                    v-if="error.password"
                    class="help-block text-danger">
                    {{ error.password[0] }}
                  </span>
                  <b-row class="mt-4">
                    <b-col cols="6">
                      <b-button
                        class="px-4"
                        variant="primary"
                        @click.prevent="login">Ingresar</b-button>
                    </b-col>
                    <b-col
                      cols="6"
                      class="text-right">
                      <b-button
                        variant="link"
                        class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
              <b-card
                no-body
                class="text-white bg-primary py-5 d-md-down-none"
                style="width:44%">
                <b-card-body class="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <b-button
                      variant="primary"
                      class="active mt-3">Registrate Ahora!</b-button>
                  </div>
                </b-card-body>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'clean',
  data() {
    return {
      error: {},
      email: '',
      password: ''
    }
  },
  created() {
    // Access using $auth validamos si ya estamos logueados
    if (this.$auth.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    login() {
      this.error = {}
      // Prepare form data
      const formData = {
        email: this.email,
        password: this.password
      }
      this.$axios
        .get('/sanctum/csrf-cookie')
        .then(() =>
          this.$auth
            .loginWith('local', { data: formData })
            .then(() =>
              //Redirect user after login
              this.$router.push('/')
            )
            .catch(err => {
              if (err.response.status == 422) {
                //preguntamos si el error es 422
                this.error = err.response.data.errors
              }
            })
        )
        .catch(err => {
          this.error = err
        })
    }
  }
}
</script>
