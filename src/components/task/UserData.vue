<template>
<section>
    <form @submit.prevent="submitdata">
    <input type="text" placeholder="name" v-model="eneterdName"/>
    <input type="text" placeholder="age" v-model="eneterdAge"/>
    <button>set user data</button>
</form>
</section>
</template>

<script>
export default{
emits:['st-data'],
data(){
    return{
        eneterdName:'',
        eneterdAge:''
    }
},
methods:{
    submitdata(){
        this.$emit('st-data',this.eneterdName,this.eneterdAge)
    }
}
}
</script>