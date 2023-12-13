<!-- ?The native event object in JavaScript is an object that contains information about an event that has occurred in the browser. This object is automatically passed as the first parameter to the event handler function when an event is triggered. The properties and methods of the event object provide details about the event, such as the type of event, the target element, and the state of modifier keys (like Shift, Ctrl, Alt). 
type: A string representing the type of the event (e.g., "click", "keydown", "submit").
target: A reference to the DOM element that triggered the event.
currentTarget: A reference to the DOM element to which the event handler is attached.
keyCode or key: For keyboard events, it represents the key code or key identifier.
clientX and clientY: The horizontal and vertical coordinates of the mouse pointer relative to the viewport.
preventDefault(): A method that, when called, prevents the default action of the event.-->
<template>
    <div>
      <button @click="handleButtonClick">Click me</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleButtonClick(event) {
        console.log('Button clicked!');
        console.log('Event type:', event.type);
        console.log('Target element:', event.target);
        console.log('Current target element:', event.currentTarget);
  
        // Accessing specific properties for different event types
        if (event.type === 'keydown') {
          console.log('Key code:', event.keyCode);
        } else if (event.type === 'mousemove') {
          console.log('Mouse coordinates:', event.clientX, event.clientY);
        }
  
        // Prevent the default action (e.g., navigating to a link or submitting a form)
        event.preventDefault();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  