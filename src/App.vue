<template>
  <div id="app">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Create from './components/Create.vue'
import {action_loadStudents} from './store'

export default {
  name: 'app',
  components: {
    Create
  },
  async created() {
    this.$store.dispatch(action_loadStudents);
  },
}
</script>

<style>
.menu-button {
  width: 78px;
}
</style>
