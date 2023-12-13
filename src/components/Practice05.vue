<template>
<button v-on:click="counter++">add</button>
<button v-on:click="counter--">minus</button>
{{ counter }}
</template>

<script>
export default {
    name:'Practice05',
    data(){
        return{
            counter:0
        }
    }
}
</script>