<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="view in views" :key="view.title">
        <div class="toggle-button text-center"
             :class="{'toggle\-active': view.show,
                      'left\-toggle': view.leftToggle,
                      'right\-toggle': view.rightToggle}"
             @click="selectView(view.title)">
          {{view.title}}
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <Create v-if="selectedView == 'Create'"/>
      <Read v-else-if="selectedView == 'Read'"/>
      <Update v-else-if="selectedView == 'Update'"/>
      <Delete v-else-if="selectedView == 'Delete'"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Create from './Create'
import Read from './Read'
import Update from './Update'
import Delete from './Delete'

export default {
  name: 'MenuToggle',
  components: {
    Create,
    Read,
    Update,
    Delete
  },
  data() {
      return {
        selectedView: 'Create',
        views: [
          {
            title: 'Create',
            show: true,
            leftToggle: true,
            rightToggle: false
          },
          {
            title: 'Read',
            show: false,
            leftToggle: false,
            rightToggle: false
          },
          {
            title: 'Update',
            show: false,
            leftToggle: false,
            rightToggle: false
          },
          {
            title: 'Delete',
            show: false,
            leftToggle: false,
            rightToggle: true
          }
        ]

      }
  },
  methods: {
    selectView(view) {
      this.selectedView = view;
      for (let i = 0; i < this.views.length; i++) {
        if (this.views[i].title == view) {
          this.views[i].show = true;
        } else {
          this.views[i].show = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.toggle-button {
  cursor: pointer;
  color: white;
  background-color: rgb(177, 177, 177);
  width: 80px;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
}

.toggle-button:hover {
  background-color: rgba(177, 177, 177, 0.596);
}

.toggle-active, .toggle-active:hover {
  background-color: #464646;
}

.left-toggle {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.right-toggle {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>