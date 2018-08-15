<template>
    <div>
        <h1>{{$store.state.test.txt}}</h1>
        <input v-model="txt" type="text"><br>
        <button @click="change">点击我改变store</button>
    </div>
</template>
<script>
export default {
    name:'storeTest',
    data(){
        return {
            txt:''
        }
    },
    methods:{
        change(){
            let value=this.txt;
            this.$store.commit('test/change',value);
            this.txt="";
        }
    }
}
</script>

