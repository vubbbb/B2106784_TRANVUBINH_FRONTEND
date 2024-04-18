<template>
    <img src="../assets/img0.jpg" class="wave" alt="login-wave">
    <div class="row" style="height: 90vh">
      <div class="col-0 col-md-6 flex justify-center content-center">
        <img src="../assets/logologin.png" class="responsive" alt="login-image">
      </div>
      <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
           class="col-12 col-md-6 flex content-center">
        <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="../assets/img2.jpg" alt="avatar">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitForm">
              <q-input label="Email" v-model="login.email">
              </q-input>
              <q-input label="Password" type="password" v-model="login.password">
              </q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  import axios from 'axios';
  import { useToast } from 'vue-toastification';
  
  export default {
    name: 'Login',
    setup () {
      const toast = useToast();
      return { toast }
    },
    data () {
      return {
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3333/api/auth/login', this.login);
        localStorage.setItem('token', response.data.accessToken);
        if (response.status === 200) {
          this.$router.push('/');
          toast.success('Login successfully');
        }
      } catch (error) {
        console.error(error);
      }
      // localStorage.setItem('token', response.user.accessToken);
      // console.log(response.data.accessToken);
    }
  },
  }
  </script>
  
  <style scoped>
  .wave {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  </style>