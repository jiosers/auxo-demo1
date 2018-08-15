const {Actor}=require("cqrs");
module.exports=class Toptic extends Actor{
    constructor(data){
        super({
            title:data.title,
            content:data.content
        })
    }
    change(){
        this.$({title,content})
    }
    get updater(){
        return {
            change(json,event){
                const {title,content}=event.data
                return {
                    title,
                    content
                }
            }
        }
    }
}