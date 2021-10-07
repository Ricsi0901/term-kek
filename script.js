$(function(){
    const termekek=[];
adatbeolvasas("jsontermekek.json",termekek,adatbetolt);
$("#modosit").on("click",adatfelvesz);
    
    
    
    function adatbetolt(){
        console.log("belépet")
        $("#tablazat").append("<table>");
       let txt=("<tr id ='fejlec'>fejléc</tr><th>termékneve</th><th>leírás</th><th>készlet</th><th>ár</th>")
       /* termekek.forEach(termek => {
            const talan={};
            talan.leir=termek;*/
            console.log("forearc előtt");
            console.log(termekek);
            termekek.forEach((elem,i)=>{
                console.log("forearcban");
                txt+="<tr id=t'"+i+"'>";
                for (let item in elem){
                   // receptek.forEach(item){
                    txt+="<td>"+elem[item]+"</td>";
                }
                txt+='<td id='+i+'> <input type="button" id="modosit" value="Modosit"></td>';
                txt+="</tr>";
               
            })
                $("article table").append(txt);
            

       
    }
    
   /* function adatfelvesz(){
     


    }*/
    
    function adatbeolvasas(fajlnev,tomb,myCallBack){
        $.ajax(
            {
                url:fajlnev,
                success:function(ressult){
                    console.log(ressult);
                    ressult.forEach(element => {
                        tomb.push(element);
                    });
                    myCallBack();
                }
        
            }
        );
    }
        
});