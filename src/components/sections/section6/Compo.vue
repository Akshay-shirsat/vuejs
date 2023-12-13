<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <button @click="updateContent">Update Content</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Child Component',
        content: 'This is the content of the child component.'
      };
    },
    methods: {
      updateContent() {
        this.content = 'Content updated!';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles specific to this component */
  </style>
  