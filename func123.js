function num1()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"1";
   document.getElementById("expr").innerHTML=newhead;
}

function num2()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"2";
   document.getElementById("expr").innerHTML=newhead;
}

function num3()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"3";
   document.getElementById("expr").innerHTML=newhead;
}

function num4()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"4";
   document.getElementById("expr").innerHTML=newhead;
}

function num5()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"5";
   document.getElementById("expr").innerHTML=newhead;
}


function num6()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"6";
   document.getElementById("expr").innerHTML=newhead;
}

function num7()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"7";
   document.getElementById("expr").innerHTML=newhead;
}


function num8()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"8";
   document.getElementById("expr").innerHTML=newhead;
}

function num9()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"9";
   document.getElementById("expr").innerHTML=newhead;
}

function num0()
{
   head=document.getElementById("expr").innerHTML;
   newhead=head+"0";
   document.getElementById("expr").innerHTML=newhead;
}


function del()
{   
    head=document.getElementById("expr").innerHTML;
    newhead=head.substring(0,head.length-1); 
    document.getElementById("expr").innerHTML=newhead;
}

function dot()
{

    head=document.getElementById("expr").innerHTML;
    newhead=head+".";
    document.getElementById("expr").innerHTML=newhead;
}

function clr()
{
    document.getElementById("expr").innerHTML="";
}

function plus()
{
    head=document.getElementById("expr").innerHTML;
    newhead=head+"+";
    document.getElementById("expr").innerHTML=newhead;
}

function minus()
{
    head=document.getElementById("expr").innerHTML;
    newhead=head+"-";
    document.getElementById("expr").innerHTML=newhead;
}

function mult()
{
    head=document.getElementById("expr").innerHTML;
    newhead=head+"*";
    document.getElementById("expr").innerHTML=newhead;
}


function divi()
{
    head=document.getElementById("expr").innerHTML;
    newhead=head+"/";
    document.getElementById("expr").innerHTML=newhead;
}

function equals()
{  

    try{
    head=document.getElementById("expr").innerHTML;
    result=eval(head);
    document.getElementById("expr").innerHTML="Ans="+result;}

    catch(error)
    {
        alert(error);
    }
}



function leftp()
{
    head=document.getElementById("expr").innerHTML;
    newhead=head+"(";
    document.getElementById("expr").innerHTML=newhead;
}

function rightp()
{
    head=document.getElementById("expr").innerHTML;
    newhead=head+")";
    document.getElementById("expr").innerHTML=newhead;  
}