<template>
  <v-container>
    <div class="">
      <div class="col-9">

        <RouterView />
      </div>
    </div>
  </v-container>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'Iventory',
  components: {
    RouterView // Đảm bảo rằng bạn đã đăng ký RouterView component ở đây
  }
}
</script>

<style scoped>
.blue_background {
  background-color: #40A3F3;
}



.my-card:hover {
  background-color: #40A3F3;
  color: white;
}
</style>
