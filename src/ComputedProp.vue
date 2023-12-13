<!-- 
n Vue.js, computed properties are special properties that are calculated based on other data properties. Computed properties are reactive, meaning they automatically update whenever their dependent properties change. They are particularly useful for performing complex calculations, filtering, or formatting data without having to explicitly call a method.

 -->

 <template>
    <div>
      <p>Original Message: {{ originalMessage }}</p>
      <p>Computed Reversed Message: {{ reversedMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:'computed',
    data() {
      return {
        message: 'Hello, Akshay',
      };
    },
    computed: {
      // Computed property that depends on 'message'
      originalMessage() {
        return this.message;
      },
      // Computed property that reverses the 'message'
      reversedMessage() {
        return this.message.split('').reverse().join('');
      },
    },
  };
  </script>
  