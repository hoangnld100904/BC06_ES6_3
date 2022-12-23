function Valdiation(){
    this.checkEmpty= function(valueInput, msgError){
        if (valueInput.trim()==""){
            alert(msgError)
            return false
        }
        else{
            return true
        }
    }
    this.checkExisted= function(valueInput, msgError, arrayInput){
        var isExist = arrayInput.some(function(task){
            return task.description == valueInput;
        })
        if (isExist){
            alert(msgError)
            return false
        }
        else{
            return true
        }
    }
}