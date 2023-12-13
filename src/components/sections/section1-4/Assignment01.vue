<template>
    <div>
        <h1>Assignment01</h1>
        <h2>{{ firstname }}</h2>
        <h3>{{ age }}</h3>
        <h3>{{ fage() }}</h3>
        <h3>{{printRandomNumber(1,100)}}</h3>
    </div>
</template>

<script>
export default{
    name:'assignment',
    data(){
       return{
        firstname:'TechnoKnees',
        age: 25,
        output01:Number
       } 
    },
    methods:{
         printRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
},
fage(){
    return this.age+5
}

    }
}
</script>

<style scoped>
div {
    width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2%;
  border: 1px solid #ccc; 
}

h1, h2, h3 {
  margin: 0; 
  padding: 10px; 
}


</style>