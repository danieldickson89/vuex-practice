<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Create</div>
    </div>
    <div class="row justify-content-center mb-2"> 
        <input class="form-control col-4 mr-2" v-model="newStudent.name"/>
        <div class="btn btn-success my-button col-1" @click="addStudent">Add</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {action_addStudent} from '../store'

export default {
  name: 'Create',
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