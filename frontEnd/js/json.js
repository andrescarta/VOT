/* Json 2 */

    var url="https://itacademybcn.herokuapp.com/hackaton";

    $("#preview").click(function() {
        var success=function(user){
            alert("Benvingut " + user.name);
        };
      
         var error=function(error){
            alert("Error al registrar-se: " + error.status);
        };
        var json = initRegisterJson();
        debugger;
        post(url+"/users",json,success,error);
    });


    function initRegisterJson(){
        //var email=$('#inputEmail').val();
        //var password=$('#inputPassword').val();

        var nom = $(this).find("input[id='name']").val();
        var cognoms = $(this).find("input[id='lastName']").val();
        var email = $(this).find("input[id='email']").val();
        var password = $(this).find("input[id='password']").val();
        var idProf = parseInt($(this).find("input[id='idProfile']").val());
     
        var json={};

        json["nom"]=nom;
        json["lastName"]=cognoms;
        json["email"]=email;
        json["password"]=password;
        json["idProfile"]=idProf;
     
        return json;
    }

    function post(url,json,success, error){
        $.ajax({
          method: "POST",
          url: url,
          data: JSON.stringify(json),
          contentType: "application/json"
        }).done(function(data) {
           success(data);
        }).fail(function(err){
           error(err);
        });
    }