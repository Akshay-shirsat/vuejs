<template>
<button @click="sendDataToParent">Send Data to Parent</button>
</template>

<script>
export default{
    props:[
'name'
    ],
    methods:{
        sendDataToParent() {
      // Emit an event named 'childData' with some data
      this.$emit('childData', 'Hello from the child!');
          }
        }
    }
</script>