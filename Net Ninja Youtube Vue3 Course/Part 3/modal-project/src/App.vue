<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <Modal/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal';
export default {
  name: 'App',
  components: {
    // HelloWorld
    Modal
  },
  data(){
    return {
      title: 'My First Vue App'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  padding-bottom: 10px;
  border-bottom: 1px solid pink;
  display: inline-block;
}
</style>
