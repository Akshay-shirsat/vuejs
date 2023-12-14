<template>

<!-- <ActiveGoal v-if="activeBtn==='active-btn'" />
<ManageGoal v-if="activeBtn==='mng-btn'"/> -->
<!-- <KeepAlive>
<component :is="activeBtn === 'active-btn' ? 'ActiveGoal' : 'ManageGoal'">
</component>
</KeepAlive>
<br>
<button @click="btnclick('active-btn')">ActiveGoal</button>
<button @click="btnclick('mng-btn')">ManageGoal</button> -->
<Form />
</template>

<script>
// import ActiveGoal from './components/sections/section9/ActiveGoal.vue';
// import ManageGoal from './components/sections/section9/ManageGoal.vue';
import Form from './components/sections/section11/form.vue';
export default{
components:{
  // ActiveGoal,
  // ManageGoal
  Form
},
data(){
  return{
    // activeBtn:'active-btn'
  }
},
methods:{
  // btnclick(abc){
  //   this.activeBtn=abc;
  // }
}

}

</script>
