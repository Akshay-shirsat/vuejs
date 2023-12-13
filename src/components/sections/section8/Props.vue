<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    // Define a prop named "message"
    props: ['message'],
    mounted() {
      // Access the prop value in the child component
      console.log('Received prop:', this.message);
    }
  };
  </script>
  