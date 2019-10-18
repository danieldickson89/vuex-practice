<template>
  <div class="container">
    <div v-for="student in students" :key="student.id" class="row justify-content-center mt-3 mb-2"> 
        <input class="form-control col-4 mr-2" v-model="student.name"/>
        <div class="btn btn-success my-button col-1 mr-2" @click="updateStudent(student)">Update</div>
    </div>
    <div class="row justify-content-center mt-3">
        <div class="btn btn-primary my-button mr-2" @click="updateAll()">Update All</div>
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
      }
  }
}
</script>

<style scoped>

</style>