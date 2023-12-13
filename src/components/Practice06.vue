<template>
<input type="text" v-on:input="setName($event,'technokeens')" v-on:keyup.enter="confirm" />
<p>{{confirmName}}</p>
</template>

<script>
export default {
    name:'Practice06',
    data(){
        return{
            name:"",
            confirmName:""
        }
    },
    methods:{
        setName(event,lastname ){
            this.name=event.target.value+ " " + lastname
        },
        confirm(){
            this.confirmName=this.name
        }
    }
}
</script>