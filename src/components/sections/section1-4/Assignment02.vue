<template>
  <div>
    <h1>Assignment02</h1>

    <input type="text" v-on:input="setName($event,'technokeens')" v-on:keyup.enter="confirm"  placeholder="type here"/>
<p>Result:{{confirmName}}</p>
    <button v-on:click="clickMe">click me</button>
  </div>
</template>

<script>
export default {
    name:'assignment',
    data(){
        return{
            name:"",
            confirmName:""
        }
    },
    methods:{
        clickMe(){
            alert("button cliked")
        },
        setName(event,lastname ){
            this.name=event.target.value+ " " + lastname
        },
        confirm(){
            this.confirmName=this.name
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

h1, button, p {
  margin:10px  0;
  padding: 10px;
}
</style>
