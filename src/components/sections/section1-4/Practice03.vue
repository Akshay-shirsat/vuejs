<template>
    <div>
        <p>Learn More <a v-bind:href="link" >About Vue</a></p>
    </div>
</template>

<script>
export default{
    name:'Practice',
    data(){
        return{
            link:'https://vuejs.org/guide/introduction.html',
        }
    }
}
</script>
