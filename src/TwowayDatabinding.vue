<!-- /Data binding in Vue.js allows you to link your data model to the view layer. It ensures that changes in your data model are automatically reflected in the view, and vice versa.
One-way Data Binding:
Interpolation: {{ expression }}
Binding attributes: v-bind:attribute="expression" or shorthand :attribute="expression"

Event binding allows you to listen to DOM events and execute methods when these events occur.

Two-Way Data Binding:
Vue.js provides a special directive called v-model for achieving two-way data binding. It automatically creates a binding for both the input value and the underlying data property.
-->

<template>
    <div>
      <input v-model="message" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue!",
      };
    },
  };
  </script>
  