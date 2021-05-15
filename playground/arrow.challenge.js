const tasks = {
    tasks:[{
        text:"groceruy shopping",
        completed:true
    },{
        text:"clean yard",
        completed:false
    },{
        text:"node course",
        completed:false
    }],
    getTaskToDo() {
        return this.tasks.filter((task)=> task.completed === false)
    }
}
console.log(tasks.getTaskToDo());