<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="row justify-content-center mt-2">
        <router-link class="btn btn-primary" :to="{name: 'ComponentA', params: {}}">
            Component A
        </router-link>
        <router-link class="btn btn-primary ml-3" :to="{name: 'ComponentB', params: {}}">
            Component B
        </router-link>
        <div class="btn btn-secondary disabled ml-3" disabled>Component C</div>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Component C</div>
    </div>
    <div class="row justify-content-center mb-2"> 
        <input class="form-control col-4 mr-2" v-model="newStudent.name"/>
        <div class="btn btn-success col-1" @click="addStudent">Add</div>
    </div>
  </div>
</template>

<script>
import {action_addStudent} from '../store'

export default {
  name: 'ComponentC',
  data() {
      return {
          newStudent: {
              name: ''
          }
      }
  },
  methods: {
      addStudent() {
          if (/\S/.test(this.newStudent.name)) {
            this.$store.dispatch(action_addStudent, this.newStudent);
            this.newStudent = '';
          }
      },
      test(e) {
          console.log(e);
      }
  }
}
</script>

<style scoped>

</style>