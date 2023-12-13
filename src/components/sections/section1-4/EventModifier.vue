<!-- In Vue.js, event modifiers are special directives that you can use to modify the behavior of event handlers. They are added to the end of an event binding to specify how the event should be handled. Vue provides a set of built-in event modifiers for common use cases -->

<template>
    <div>
      <button @click.stop="handleClick">Stop Propagation</button>
      <form @submit.prevent="handleSubmit">Prevent Default</form>
      <div @click.capture="handleCaptureClick">Capture Click</div>
      <div @click.self="handleSelfClick">Click on me, not my children</div>
      <button @click.once="handleClickOnce">Click me once</button>
      <div @scroll.passive="handleScroll">Passive Scroll</div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        console.log('Clicked - Stop Propagation');
      },
      handleSubmit() {
        console.log('Form Submitted - Prevent Default');
      },
      handleCaptureClick() {
        console.log('Capture Click');
      },
      handleSelfClick() {
        console.log('Clicked on Self');
      },
      handleClickOnce() {
        console.log('Clicked Once');
      },
      handleScroll() {
        console.log('Scrolling (Passive)');
      },
    },
  };
  </script>
  