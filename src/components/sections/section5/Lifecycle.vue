<template>
    <p>{{ message }}</p>
</template>

<script>
export default{
    data(){
        return{
            message: 'Hello, Vue!'
        }
    },
    methods:{
        beforeCreate: function() {
    console.log('beforeCreate hook');
  },
  created: function() {
    console.log('created hook');
  },
  beforeMount: function() {
    console.log('beforeMount hook');
  },
  mounted: function() {
    console.log('mounted hook');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate hook');
  },
  updated: function() {
    console.log('updated hook');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy hook');
  },
  destroyed: function() {
    console.log('destroyed hook');
  }
    }
}
</script>