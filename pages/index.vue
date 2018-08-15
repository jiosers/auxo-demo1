
<template>
  <section class="container">
    <create-user-form @create="create"/>
    <create-topic-form @on-create="createTopic"></create-topic-form>
    <h1 class="title">
      TOPICS
    </h1>
    <ul class="users">
      <li v-for="(topic, index) in $store.state.topic.topics" :key="index" class="user">
        <h4>{{topic.title}}:{{topic.content}}</h4>
      </li>
    </ul>
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in $store.state.users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: user.id }}">
          {{ user.name }} 
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>


<script>
import axios from '~/plugins/axios'
import domain from '~/plugins/domain'
import CreateUserForm from '~/components/CreateUserForm.vue';
import CreateTopicForm from '~/components/CreateTopicForm.vue';
export default {
  components:{
    CreateUserForm,
    CreateTopicForm
  },
  async fetch ({ store, params }) {
    let users = (await axios.get('/users')).data;
    store.commit('init', users);
    let topics = (await axios.get('/users')).data;
    store.commit('init',topics)
  },
  methods:{
    async create(name){
      const {data} = await axios.post("/domain/User/create",{name});
      this.$store.commit('create', {id:data.id,name});
    },
    async createTopic({title,content}){
      const {data} = await domain.create("Topic",{title,content})
      this.$store.commit('topic/create', {title,content});
    }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
