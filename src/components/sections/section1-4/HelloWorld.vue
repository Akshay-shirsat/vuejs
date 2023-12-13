

<template>

    <h3>
      Hello {{xyz}}</h3>
      <h1>{{ random() }}</h1>

</template>



<script >
export default{
  name:'HelloWorld',

data(){
  return{
    xyz:"Technoknees"
  }
},
methods:{
   random(){
    const abc=Math.random()
    if(abc<0.5){
     return "Hello Akshay"
    }else{
      return "Hello Techno "
    }
  }
}
}
</script>

