<template>
  <div class="container">
    <div v-for="student in students" :key="student.id" class="row justify-content-center mt-3 mb-2"> 
        <input class="form-control col-4" v-model="student.name" @keyup="search(student)"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {action_updateStudent} from '../store'

export default {
  name: 'Update',
  data() {
      return {
          timeout: null
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
      updateAll() {
          for (let i = 0; i < this.students.length; i++) {
              this.$store.dispatch(action_updateStudent, this.students[i]);
          }
      },
      search(student) {
          clearTimeout(this.timeout);
          let that = this;
          this.timeout = setTimeout(function() {
              that.updateStudent(student);
          }, 1000);
      }
  }
}
</script>

<style scoped>

</style>