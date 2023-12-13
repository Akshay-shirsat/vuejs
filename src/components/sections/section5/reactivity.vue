<template>
    
  <p>{{ fullName }}</p>


</template>

<script>
export default{
    el: '#app',
    data(){
        return{
            firstName: 'John',
    lastName: 'Doe'      
        }
    },
    computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>