<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import {action_loadStudents} from './store'

export default {
  name: 'app',
  components: {
    ComponentA
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
