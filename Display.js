class Display{
    constructor(displayPvalue,displayAvalue){
        this.displayAvalue=displayAvalue;
        this.displayPvalue=displayPvalue;
        this.calculate=new Calculate();
        this.Avalue='';
        this.Pvalue='';

    }
    insertnumber(isnumber){
        this.Avalue=this.Avalue+isnumber;
        this,this.printvalues();
    }

    printvalues(){
        this.displayAvalue.textContent=this.Avalue;
        this.displayPvalue.textContent=this.Pvalue;
    }
}