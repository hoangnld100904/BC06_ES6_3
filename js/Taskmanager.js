function TaskManager(){
    this.taskArray= [];
    this.themTask=(task)=>{
        this.taskArray.push(task)
    }
    this.findIndex=(desc)=>{
        let vitri=-1;
        vitri= this.taskArray.findIndex((task)=> desc == task.description)
        console.log(vitri)
        return vitri
    }
    this.xoaTask=(desc)=>{
        // console.log(this.taskArray)
        var vitri= this.findIndex(desc)
        if (vitri != -1){
            this.taskArray.splice(vitri,1)
        }
    }
    this.hoanthanhTask=(desc)=>{
        var vitri= this.findIndex(desc)
        if (vitri != -1){
            this.taskArray[vitri].status= 'complete'
        }
    }
    this.chuahoanthanhTask=(desc)=>{
        var vitri= this.findIndex(desc)
        if (vitri != -1){
            this.taskArray[vitri].status= 'undone'
        } 
    }
}