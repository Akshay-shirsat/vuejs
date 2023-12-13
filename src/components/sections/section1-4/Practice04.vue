<template>
    <h1>{{output()}}</h1><br>
</template>

<script>

export default{
    name:'Practice04',
    data(){
        return{
            output01:"Cricket",
            output02:"Football"
        }
    },
    methods:{
        output(){
            const abc=Math.random()
    if(abc<0.5){
    return this.output01
    }else{
        return this.output02
    }
        }
    }
}
</script>