<template>
  <div class="wrapper">
    <Props message="Props Parent to child"/><br>
    <h2>child to Parent data tranfer</h2>
    <PropsBehavior @childData="receiveDataFromChild"/>
    <p>Message from child: {{ messageFromChild }}</p>
  </div>
</template>

<script setup>
import Props from './components/sections/section8/Props.vue';
import PropsBehavior from './components/sections/section8/PropsBehavior.vue';
import { ref } from 'vue';

const messageFromChild = ref('');

// The method to handle the custom event from the child
const receiveDataFromChild = (dataFromChild) => {
  messageFromChild.value = dataFromChild;
};
</script>
