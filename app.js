
var count=1;
function fill(control) 
{
    
    if (count<=9) 
    {
    if (count%2!=0) 
    {
     putdata(control.id,"X")     
    }else
    {
        putdata(control.id,"0")
    }
    count++;
    if (checkWin()) 
    {
        window.open('winner.html')
        // alert("Winner");
        // reset();
    }
    }else
    {
        // alert("Match Draw");
        window.open('draw.html')
    }
    
}

function reset() 
{
    for(var i=1; i<=9;i++)
    {
        putdata('div'+i,"")
    }
    count=1;
    
}


function checkWin() 
{


    if(checkcondition('div1','div2','div3') || checkcondition('div1','div5','div9') || checkcondition('div1','div4','div7') || checkcondition('div3','div5','div7')
    || checkcondition('div4','div5','div6') || checkcondition('div7','div8','div9') || checkcondition('div2','div5','div8')
    || checkcondition('div3','div6','div9') )
    {
        return true;

    }
    
    
}


function checkcondition(div1,div2,div3) 
{
    if (getData(div1)!="" && getData(div2)!="" && getData(div3)!="" && getData(div1)==getData(div2) &&
    getData(div2)==getData(div3)) 
    {

      return true;
        
    }

    
}

function getData(div) 
{
   return document.getElementById(div).innerHTML;
    
}

function putdata(div,data) 
{
    document.getElementById(div).innerHTML=data;

}