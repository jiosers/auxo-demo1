<template>
    <div>
        <nav-bar/>
        <h1>自定义布局</h1>
        <nuxt/>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components:{
        NavBar
    },
    name:'myLayout',
}
</script>
