<template>
  <div class="container">
    <div class="row justify-content-center mt-3 mb-2"> 
        <input class="form-control col-4 mr-2" v-model="nameText"/>
        <div class="btn btn-success my-button col-1" @click="addStudent">Add</div>
    </div>
    <div class="row justify-content-center mt-3">
        <transition name="fade">
            <div v-if="showAlert" class="alert alert-success alert-dismissible fade show col-5">
                "{{addedName}}" has been added!
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
import {action_addStudent} from '../store'

export default {
  name: 'Create',
  data() {
      return {
          newStudent: {
              name: ''
          },
          nameText: '',
          showAlert: false,
          addedName: null
      }
  },
  methods: {
      addStudent() {
          if (/\S/.test(this.nameText)) {
            this.addedName = this.nameText;
            this.newStudent.name = this.nameText;
            this.$store.dispatch(action_addStudent, this.newStudent);
            this.showAlert = true;
            this.clearText();
          }
      },
      test(e) {
          console.log(e);
      },
      clearText() {
          this.nameText = '';
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
.fade-leave{
    /* opacity: 1; */
}
.fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
}
</style>