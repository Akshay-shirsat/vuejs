<template>

<input ref="inputRef" type="text" placeholder="Type something">
<button @click="focusInput">Focus Input</button>

</template>

<script>
export default{
data(){
    return{
        
}
},
methods: {
    focusInput: function() {
      // Use $refs to access the inputRef and focus on it
      this.$refs.inputRef.focus();
      console.log(this.$refs.inputRef.value)
    },
    }
}

</script>