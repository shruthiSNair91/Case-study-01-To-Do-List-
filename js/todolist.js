var xhttp=new XMLHttpRequest();
var f=0;
xhttp.onreadystatechange=function()

{
    if(xhttp.readyState==4 && xhttp.status==200)
    
    {
        var listObj=JSON.parse(this.responseText);
        console.log(listObj);
        var DisplayList="";
                    // listObj.array.forEach(element => {
                    //     DisplayList +=`${element.id}`             ;
                    // });
                
        var todo = document.getElementById("todolist");
        for(var i=0;i<listObj.length;i++)
        {
            var chk = document.createElement("input");
            chk.type = 'checkbox';
            chk.id = listObj[i].id;
            if (listObj[i].completed)
            {
                chk.checked = true;
                chk.disabled = true;
            }         
            // chk.onclick = "checkClicked()";
            var label = document.createElement('label');
            label.appendChild(document.createTextNode(listObj[i].title));
            todo.appendChild(chk);
            todo.appendChild(label);
            lbr = document.createElement("br");
            todo.appendChild(lbr);
            hr=document.createElement("hr");
            todo.appendChild(hr);
              
        } 
        for(let i=0;i<listObj.length;i++)
        {
            const checkboxes = document.querySelectorAll(`input[chk.id="${listObj[i].id}"]:checked`);
            // document.getElementById(chk.id).addEventListener('change', function(c){
                checkboxes.forEach((checkbox) => {
                    alert("checked");
                });
              ;
               
        }
       
        
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

