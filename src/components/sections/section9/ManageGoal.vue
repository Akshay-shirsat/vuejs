<template>
    <div>
      <h1>Manage GOALS</h1><br>
      <input type="text" ref="goal" />
      <button @click="setGoal">Set Goal</button>
      <Teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <p>Please enter at least a few characters.</p>
      </ErrorAlert>
    </Teleport>
    </div>
  </template>
  
  <script>
  import ErrorAlert from './ErrorAlert.vue';
  
  export default {
    components: {
      ErrorAlert
    },
    data() {
      return {
        inputIsInvalid: false
      };
    },
    methods: {
      setGoal() {
        const inputValue = this.$refs.goal.value;
        if (inputValue === '') {
          this.inputIsInvalid = true;
        } else {
          this.inputIsInvalid = false;
          // Do something with the goal value if needed
          console.log('Goal set:', inputValue);
        }
      }
    }
  };
  </script>
  