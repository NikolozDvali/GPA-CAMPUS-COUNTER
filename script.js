


    let C1 = document.getElementById('C1');
    let C2 = document.getElementById('C2');
    let C3 = document.getElementById('C3');
    let C4 = document.getElementById('C4');
    let C5 = document.getElementById('C5');
    let C6 = document.getElementById('C6');
    let C7 = document.getElementById('C7');
    let C8 = document.getElementById('C8');

    let G1 = document.getElementById('G1');
    let G2 = document.getElementById('G2');
    let G3 = document.getElementById('G3');
    let G4 = document.getElementById('G4');
    let G5 = document.getElementById('G5');
    let G6 = document.getElementById('G6');
    let G7 = document.getElementById('G7');
    let G8 = document.getElementById('G8');

    let G11 = 0;
    function GtN(G1){
    if(G1 == "A"){
         G11 = 4;
    }else if(G1 == "B"){
         G11 = 3.38;
    }else if(G1 == "C"){
         G11 = 2.77;
    }else if(G1 == "D"){
         G11 = 2.16;
    }else if(G1 == "E"){
         G11 = 1.55;
    }else if(G1 == "FX"){
         G11 = 0;
    }else if(G1 == "F"){
         G11 = 0;
    } else{
         G11 = 0;
    }
    return G11
    }

    let G22=0;
    function GtN(G2){
    if(G2=="A"){
        G22=4;
    }else if(G2=="B"){
        G22=3.38;
    }else if(G2=="C"){
        G22=2.77;
    }else if(G2=="D"){
        G22=2.16;
    }else if(G2=="E"){
        G22=1.55;
    }else if(G2=="FX"){
        G22=0;
    }else if(G2=="F"){
        G22=0;
    } else{
        G22=0;
    }
    return G22
    }

    let G33=0;
    function GtN(G3){
    if(G3=="A"){
        G33=4;
    }else if(G3=="B"){
        G33=3.38;
    }else if(G3=="C"){
        G33=2.77;
    }else if(G3=="D"){
        G33=2.16;
    }else if(G3=="E"){
        G33=1.55;
    }else if(G3=="FX"){
        G33=0;
    }else if(G3=="F"){
        G33=0;
    } else{
        G33=0;
    }
    return G33
    }

    let G44=0;
    function GtN(G4){
    if(G4=="A"){
        G44=4;
    }else if(G4=="B"){
        G44=3.38;
    }else if(G4=="C"){
        G44=2.77;
    }else if(G4=="D"){
        G44=2.16;
    }else if(G4=="E"){
        G44=1.55;
    }else if(G4=="FX"){
        G44=0;
    }else if(G4=="F"){
        G44=0;
    } else{
        G44=0;
    }
    return G44
    }

    let G55=0;
    function GtN(G5){
    if(G5=="A"){
        G55=4;
    }else if(G5=="B"){
        G55=3.38;
    }else if(G5=="C"){
        G55=2.77;
    }else if(G5=="D"){
        G55=2.16;
    }else if(G5=="E"){
        G55=1.55;
    }else if(G5=="FX"){
        G55=0;
    }else if(G5=="F"){
        G55=0;
    } else{
        G55=0;
    }
    return G55
    }

    let G66=0;
    function GtN(G6){
    if(G6=="A"){
        G66=4;
    }else if(G6=="B"){
        G66=3.38;
    }else if(G6=="C"){
        G66=2.77;
    }else if(G6=="D"){
        G66=2.16;
    }else if(G6=="E"){
        G66=1.55;
    }else if(G6=="FX"){
        G66=0;
    }else if(G6=="F"){
        G66=0;
    } else{
        G66=0;
    }
    return G66
    }

    let G77=0;
    function GtN(G7){
    if(G7=="A"){
        G77=4;
    }else if(G7=="B"){
        G77=3.38;
    }else if(G7=="C"){
        G77=2.77;
    }else if(G7=="D"){
        G77=2.16;
    }else if(G7=="E"){
        G77=1.55;
    }else if(G7=="FX"){
        G77=0;
    }else if(G7=="F"){
        G77=0;
    } else{
        G77=0;
    }
    return G77
    }

    let G88=0;
    function GtN(G8){
    if(G8=="A"){
        G88=4;
    }else if(G8=="B"){
        G88=3.38;
    }else if(G8=="C"){
        G88=2.77;
    }else if(G8=="D"){
        G88=2.16;
    }else if(G8=="E"){
        G88=1.55;
    }else if(G8=="FX"){
        G88=0;
    }else if(G8=="F"){
        G88=0;
    } else{
        G88=0;
    }
    return G88
    }

    let b = document.getElementById('but');
      
    b.addEventListener('click',function (){

       function CalcQP(){
        let b1 = Number(C1.value)
        let b2 = Number(C2.value)
        let b3 = Number(C3.value)
        let b4 = Number(C4.value)
        let b5 = Number(C5.value)
        let b6 = Number(C6.value)
        let b7 = Number(C7.value)
        let b8 = Number(C8.value)
            
        let a1 = GtN(G1.value)
        let a2 = GtN(G2.value)
        let a3 = GtN(G3.value)
        let a4 = GtN(G4.value)
        let a5 = GtN(G5.value)
        let a6 = GtN(G6.value)
        let a7 = GtN(G7.value)
        let a8 = GtN(G8.value)

           let f = a1*b1+a2*b2+a3*b3+a4*b4+a5*b5+a6*b6+a7*b7+a8*b8
       return f
       }

       function CS(){
        let b1 = Number(C1.value)
        let b2 = Number(C2.value)
        let b3 = Number(C3.value)
        let b4 = Number(C4.value)
        let b5 = Number(C5.value)
        let b6 = Number(C6.value)
        let b7 = Number(C7.value)
        let b8 = Number(C8.value)
        let s = b1+b2+b3+b4+b5+b6+b7+b8
        return s
       }
       
       function fin(){
        let GPA = CalcQP()/CS();
        return GPA
       }
        
       const element = document.getElementById('resultDispley');
       element.innerHTML = fin();
    })
 