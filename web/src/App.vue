<template>
  <NavBar />
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script>
import {ref, nextTick, provide} from "vue"
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery'

export default{
  components:{
  NavBar
  },
  setup() {
    // $.ajax({
    //   url: "http://localhost:8081/user/account/token/",
    //   type: "post",
    //   data: ( {
    //     username: 'zbw2',
    //     password: 'zbw123',
    //   }),
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });



    // $.ajax({
    //   url: "http://localhost:8081/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: "zbw",
    //     password: "zbw123",
    //     confirmedPassword: "zbw123",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);

    return {
      isRouterAlive,
    };
  }
 
}
</script>

<style>
body {
  background-image: url("assets/images/background.jpg");
  background-size: cover;
}
</style>
