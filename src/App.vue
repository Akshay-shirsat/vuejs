<template>
  <div>
    <p>{{ messageFromChild }}</p>
    <!-- Include the ChildComponent and listen for the custom event -->
    <Child2P @childData="receiveDataFromChild"/><br>
  </div>
  <ActiveUser :name="user.name" :age="user.age"/>
  <UserData @st-data="setUserdata"/>
  <div>
    <p>{{ message }}</p>
    <ChildComponent :messageFromParent="message" />
  </div>
</template>

<script>
import Child2P from './components/sections/section8/Child2P.vue';
import ActiveUser from './components/task/ActiveUser.vue';
import UserData from './components/task/UserData.vue';
import ChildComponent from './components/sections/section8/ChildComponent.vue'
export default {
  provide() {
    return {
      messageFromParent: this.message
    };
  },
  components: {
    Child2P,
    ActiveUser,
    UserData,
    ChildComponent
},
  data() {
    return {

      message: 'Hello from the parent!',
      messageFromChild: '',
      user:{
        name:"hello world",
        age:25
      }
    };
  },
  methods: {
    // The method to handle the custom event from the child
    receiveDataFromChild(dataFromChild) {
      this.messageFromChild = dataFromChild;
    },
    setUserdata(name,age){
this.user={
  name:name,
  age:age
}
    }
  }
};
</script>
