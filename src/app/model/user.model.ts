export class User{
    empname : string;
    timein : number;
    timeout : number;
    constructor(empName:string,timeIn:number,timeOut:number){
        this.empname = empName;
        this.timein = timeIn;
        this.timeout = timeOut;
    }
    
}