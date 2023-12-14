<!-- as a wrapper having some styling -->
<template>
    <div>
      <p>Child Component Content:</p>
      <!-- Use the default slot to display the injected content -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    // No need for any additional script in this simple example
  };
  </script>
  