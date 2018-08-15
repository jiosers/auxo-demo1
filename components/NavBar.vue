<template>
    <nav>
        <nuxt-link :to="{path:'topic'}">我是Topic界面</nuxt-link>
        <nuxt-link :to="{path:'user'}">我是User界面</nuxt-link>
        <nuxt-link :to="{path:'student'}">我是Student界面</nuxt-link>
        <nuxt-link :to="{path:'sub'}">我是sub界面</nuxt-link>
        <nuxt-link :to="{path:'storeTest'}">我是storeTest界面</nuxt-link>
    </nav>
</template>
<style scoped>
nav{
    height: 50px;
    background-color: #eee;
    padding: 10px;
    line-height: 50px;
}
nav a{
   margin:5px;
   text-decoration: none;
   color:skyblue 
}
</style>


