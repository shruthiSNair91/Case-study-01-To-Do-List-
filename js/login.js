$(document).ready(function(){
    $("#login").click(function(){
       page();
        function page()
        {
            var result=validate();
            if(result)
            {
                $(location).attr('href', 'todoList.html');
            }
            else
                alert("Invalid Username or Password");
        
        }
      
        
        function validate()
        {
            if($("#uname").val()=="admin"&& $("#pswd").val()=="12345")
            {
                return true;
            }
            else
            {
                return false;
            }     
        }
    
    });  
});

    
