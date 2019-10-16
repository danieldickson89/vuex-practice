<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="row justify-content-center mt-2">
        <router-link class="btn btn-success menu-button" :to="{name: 'Create', params: {}}">
            Create
        </router-link>
         <router-link class="btn btn-warning menu-button ml-3" :to="{name: 'Read', params: {}}">
            Read
        </router-link>
        <router-link class="btn btn-primary menu-button ml-3" :to="{name: 'Update', params: {}}">
            Update
        </router-link>
        <div class="btn btn-secondary menu-button disabled ml-3" disabled>Delete</div>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Delete</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center mb-2"> 
        <div class="col-1"></div>
        <div class="col-5 text-right">{{student.name}}</div>
        <div class="btn btn-danger col-1" @click="deleteStudent(student)">Delete</div>
        <div class="col-5"></div>
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
      deleteStudent(student) {
          this.$store.dispatch(action_deleteStudent, student);
      }
  }
}
</script>

<style scoped>

</style>