<template>
    <div>
      <button @click="sendDataToParent">Send Data to Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      sendDataToParent() {
        // Emit an event named 'childData' with some data
        this.$emit('childData', 'Hello from the child!');
      }
    }
  };
  </script>
  