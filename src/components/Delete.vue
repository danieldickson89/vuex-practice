<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Delete</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center mb-2"> 
        <div class="col-1"></div>
        <div class="col-5 text-right">{{student.name}}</div>
        <div class="btn btn-danger my-button col-1" @click="deleteStudent(student)">Delete</div>
        <div class="col-5"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {action_updateStudent, action_deleteStudent} from '../store'

export default {
  name: 'Delete',
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
      deleteStudent(student) {
          this.$store.dispatch(action_deleteStudent, student);
      }
  }
}
</script>

<style scoped>

</style>