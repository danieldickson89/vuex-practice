<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="row justify-content-center mt-2">
        <div class="btn btn-secondary disabled" disabled>Component A</div>
        <router-link class="btn btn-primary ml-3" :to="{name: 'ComponentB', params: {}}">
            Component B
        </router-link>
        <router-link class="btn btn-primary ml-3" :to="{name: 'ComponentC', params: {}}">
            Component C
        </router-link>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-2">Component A</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center">
        <div class="h5 mt-2">{{student.name}}</div>
    </div>
  </div>
</template>

<script>
import {action_loadStudent} from '../store'

export default {
  name: 'ComponentA',
  data() {
      return {
      }
  },
  computed: {
      students() {
          return this.$store.state.students;
      }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>