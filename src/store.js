import Vue from 'vue'
import Vuex from 'vuex'

// Axios import
import axios from 'axios';

Vue.use(Vuex)

export const action_addStudent = 'addStudent';
export const action_loadStudents = 'loadStudents';
export const action_updateStudent = 'updateStudent';
export const action_deleteStudent = 'deleteStudent';

export default new Vuex.Store({
    state: {
        students: []
    },
    mutations: {
        addStudent: (state, student) => {
            state.students.push(student);
        },
        loadStudents: (state, students) => {
            state.students = students;
        },
        updateStudent: (state, student) => {
            state.students = [student, ...state.students.filter(s => s.id != student.id)].sort((a, b) => a.id - b.id);
        },
        deleteStudent: (state, student) => {
            state.students = [...state.students.filter(s => s.id != student.id)];
        }
    },
    actions: {
        async addStudent({commit}, newStudent) {
            let student = (await axios.post('http://localhost:3000/students', newStudent)).data;

            commit(action_addStudent, student)
        },
        async loadStudents({commit}) {
            let students = (await axios.get('http://localhost:3000/students')).data;

            commit(action_loadStudents, students)
        },
        async updateStudent({commit}, student) {
            let studentToUpdate = (await axios.put(`http://localhost:3000/students/${student.id}`, student)).data;

            commit(action_updateStudent, studentToUpdate)
        },
        async deleteStudent({commit}, student) {
            await axios.delete(`http://localhost:3000/students/${student.id}`);

            commit(action_deleteStudent, student)
        }
    }
})
