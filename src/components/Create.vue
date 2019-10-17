<template>
  <div class="container">
    <div class="row justify-content-center mt-2">
        <div class="btn btn-secondary menu-button disabled" disabled>Create</div>
         <router-link class="btn btn-warning menu-button ml-3" :to="{name: 'Read', params: {}}">
            Read
        </router-link>
        <router-link class="btn btn-primary menu-button ml-3" :to="{name: 'Update', params: {}}">
            Update
        </router-link>
         <router-link class="btn btn-danger menu-button ml-3" :to="{name: 'Delete', params: {}}">
            Delete
        </router-link>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-3">Create</div>
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