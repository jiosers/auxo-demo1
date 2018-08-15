<template>
    <div class="form">
        <div>
            <input type="text" v-model="title">
        </div>
        <div>
            <textarea v-model="content"></textarea>
        </div>
        <div>
            <button type="submit" @click="formButton">新增</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'topic',
    //layout:'MyLayout',  //使用自己布局
    data(){
        return {
            title:'',
            content:''
        }
    },
    methods:{
        async formButton(){

        }
    }
}
</script>
<style lang="css" scoped>
    .form{
        border: 1px solid #eee;
        margin: 20px auto;
        padding: 20px;
    }
    .form div{
        text-align: center;
        margin: 5px 0px;
    }
</style>

