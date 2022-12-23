function TaskManager(){
    this.taskArray= [];
    this.themTask=(task)=>{
        this.taskArray.push(task)
    }
    this.findIndex=(desc)=>{
        var index=-1;
        vitri= this.taskArray.findIndex((task)=> desc == task.description)
        console.log(vitri)
        return vitri
    }
    this.xoaTask=(desc)=>{
        // console.log(this.taskArray)
        console.log(typeof(desc))
        var vitri= this.findIndex(desc)
        if (vitri != -1){
            this.taskArray.splice(vitri,1)
        }
    }
}