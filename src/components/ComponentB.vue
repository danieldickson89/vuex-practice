<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="row justify-content-center mt-2">
        <router-link class="btn btn-primary" :to="{name: 'ComponentA', params: {}}">
            Component A
        </router-link>
        <div class="btn btn-secondary disabled ml-3" disabled>Component B</div>
        <router-link class="btn btn-primary ml-3" :to="{name: 'ComponentC', params: {}}">
            Component C
        </router-link>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Component B</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center mb-2"> 
        <input class="form-control col-4 mr-2" v-model="student.name"/>
        <div class="btn btn-success col-1 mr-2" @click="updateStudent(student)">Update</div>
        <div class="btn btn-danger col-1" @click="deleteStudent(student)">Delete</div>
    </div>
  </div>
</template>

<script>
import {action_updateStudent, action_deleteStudent} from '../store'

export default {
  name: 'ComponentB',
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
      updateStudent(student) {
          this.$store.dispatch(action_updateStudent, student);
      },
      deleteStudent(student) {
          this.$store.dispatch(action_deleteStudent, student);
      }
  }
}
</script>

<style scoped>

</style>