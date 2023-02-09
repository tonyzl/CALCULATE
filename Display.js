class Display{
    constructor(displayPvalue,displayAvalue){
        this.displayAvalue=displayAvalue;
        this.displayPvalue=displayPvalue;
        this.calculate=new Calculate();
        this.op=undefined;
        this.Avalue='';
        this.Pvalue='';
        this.simbs={
            addi:'+',
            sust:'-',
            mult:'x',
            divi:'%'
        }

    }

    toerase(){
        this.Avalue=this.Avalue.toString().slice(0,-1);
        this.printvalues();
    }

    toeraseAll(){
        this.Avalue='';
        this.Pvalue='';
        this.op=undefined;
        this.printvalues();
    }

    compute(tyOp){
        
        this.op !== 'equal' && this.calc();
        this.op=tyOp;
        this.Pvalue=this.Avalue||this.Pvalue;
        this.Avalue='';
        this.printvalues();
        /*
        this.op=tyOp;
        if(this.op !== 'equal'){
            if(this.calc()){            
                this.printvalues();}
        }else{
        this.Pvalue=this.Avalue;
        this.Avalue='';
        this.printvalues();}*/
    }

    insertnumber(isnumber){
        if (isnumber==='.'&& this.Avalue.includes('.')) return
        this.Avalue=this.Avalue.toString() + isnumber.toString();
        this.printvalues();
    }

    printvalues(){
        this.displayAvalue.textContent=this.Avalue;
        //this.displayPvalue.textContent=this.Pvalue;
        this.displayPvalue.textContent=`${this.Pvalue} ${this.simbs[this.op]|| ''}`;
    }

    calc(){
        const Pvalue=parseFloat(this.Pvalue);
        const Avalue=parseFloat(this.Avalue);
        if(isNaN(Avalue) || isNaN(Pvalue) ) return
        this.Avalue=this.calculate[this.op](Pvalue,Avalue);
    }


}