<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
        <div class="h3 mb-2">Read</div>
    </div>
    <div v-for="student in students" :key="student.id" class="row justify-content-center">
        <div class="h5 mt-2">{{student.name}}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
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