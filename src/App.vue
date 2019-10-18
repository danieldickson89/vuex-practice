<template>
  <div id="app">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <MenuToggle/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import {action_loadStudents} from './store'
import MenuToggle from './components/MenuToggle'

export default {
  name: 'app',
  components: {
    MenuToggle
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
.my-button {
  cursor: pointer;
}
</style>
