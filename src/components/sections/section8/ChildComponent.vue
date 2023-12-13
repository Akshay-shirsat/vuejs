<template>
    <div>
      <p>Message from parent: {{ messageFromParent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['messageFromParent'],
    mounted() {
      console.log('Message from parent:', this.messageFromParent);
    }
  };
  </script>
  