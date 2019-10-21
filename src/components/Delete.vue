<template>
  <div class="container">
    <div v-for="student in students" :key="student.id" class="row justify-content-center mt-3 mb-2"> 
        <div class="col-1"></div>
        <div class="col-5 text-right">{{student.name}}</div>
        <div class="btn btn-danger my-button" @click="deleteStudent(student)">
            <font-awesome-icon icon="trash"/>
        </div>
        <div class="col-5"></div>
    </div>
    <div class="row justify-content-center mt-3">
        <transition name="fade">
            <div v-if="showAlert" class="alert alert-danger alert-dismissible fade show col-5">
                "{{deletedStudent.name}}" has been deleted
                <button type="button" @click="dismissAlert()" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </transition>
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
          showAlert: false,
          deletedStudent: null,
          timeout: null
      }
  },
  computed: {
      students() {
          return this.$store.state.students;
      }
  },
  methods: {
      deleteStudent(student) {
          this.deletedStudent = student;
          this.$store.dispatch(action_deleteStudent, student);
          this.displayAlert();
      },
      displayAlert() {
          this.showAlert = true;
          clearTimeout(this.timeout);
          let that = this;
          this.timeout = setTimeout(function() {
              that.dismissAlert();
          }, 3000);
      },
      dismissAlert() {
          this.showAlert = false;
      }
  }
}
</script>

<style scoped>
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 1s;
}
.fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
}
</style>