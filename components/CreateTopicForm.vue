<template lang="html">
    <div class="form">
      <input  v-model="title">
      <textarea v-model="content"></textarea>
      <button @click="create">创建主题帖</button>
   </div>
</template>
<script>
import axios from '~/plugins/axios'
export default {
  data(){
    return {
      title:'',
      content:'',
    }
  },
  methods:{
    async create(){
      // const result = await axios.post("/domain/User/create",{name:this.name});
      this.$emit("on-create",{title:this.title,content:this.content});
      this.title='';
      this.content='';
    }
  }
}
</script>

<style lang="css" scoped>
.form{
  border: 1px solid rgba(238, 238, 238, 0.5);
  background-color: #eee;
  padding: 20px;
  width: 200px;
  text-align: center;
}
.form input,.form textarea{
  display: block;
  margin: 5px;
}
</style>
