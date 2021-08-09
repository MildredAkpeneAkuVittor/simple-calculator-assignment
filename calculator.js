 class Calculator{
    constructor(n1,n2){
        this.n1=n1;
        this.n2 =n2;
    }

    add = ()=>{
        return n1+n2;
    } 

    product = ()=>{
        return n1*n2
    }
}
module.exports = Calculator;