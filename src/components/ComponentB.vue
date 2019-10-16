<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="row justify-content-center mt-2">
        <router-link class="btn btn-success menu-button" :to="{name: 'Create', params: {}}">
            Create
        </router-link>
        <div class="btn btn-secondary menu-button disabled ml-3" disabled>Read</div>
        <router-link class="btn btn-primary menu-button ml-3" :to="{name: 'Update', params: {}}">
            Update
        </router-link>
         <router-link class="btn btn-danger menu-button ml-3" :to="{name: 'Delete', params: {}}">
            Delete
        </router-link>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-2">Read</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center">
        <div class="h5 mt-2">{{student.name}}</div>
    </div>
  </div>
</template>

<script>
import {action_loadStudent} from '../store'

export default {
  name: 'Read',
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