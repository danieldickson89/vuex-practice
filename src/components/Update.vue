<template>
  <div class="container">
    <div class="row justify-content-center mt-2">
        <router-link class="btn btn-success menu-button" :to="{name: 'Create', params: {}}">
            Create
        </router-link>
         <router-link class="btn btn-warning menu-button ml-3" :to="{name: 'Read', params: {}}">
            Read
        </router-link>
        <div class="btn btn-secondary menu-button disabled ml-3" disabled>Update</div>
        <router-link class="btn btn-danger menu-button ml-3" :to="{name: 'Delete', params: {}}">
            Delete
        </router-link>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Update</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center mb-2"> 
        <input class="form-control col-4 mr-2" v-model="student.name"/>
        <div class="btn btn-success col-1 mr-2" @click="updateStudent(student)">Update</div>
    </div>
  </div>
</template>

<script>
import {action_updateStudent} from '../store'

export default {
  name: 'Update',
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
      }
  }
}
</script>

<style scoped>

</style>