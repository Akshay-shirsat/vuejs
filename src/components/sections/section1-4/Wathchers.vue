<!-- 
watchers are a way to react to changes in data properties. While computed properties are great for synchronous and simple data transformations, watchers provide a more flexible and general-purpose way to react to changes in data, allowing you to perform asynchronous or side-effect-related tasks
 -->




<template>
    <div>
      <p>Username: {{ username }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userId: 1,
        username: null,
      };
    },
    watch: {
      userId(newValue) {
        // Assuming an asynchronous operation to fetch the username
        this.fetchUsername(newValue);
      },
    },
    methods: {
      fetchUsername(userId) {
        // Simulating an asynchronous API call
        setTimeout(() => {
          this.username = `User ${userId}`;
        }, 1000);
      },
    },
  };
  </script>
  