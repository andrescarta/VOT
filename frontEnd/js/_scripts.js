(function($) {
    $(function() {

        var elasticity = anime.timeline();

        elasticity.add({
                targets: '#elasticity .logoapp',
                translateY: 0,
                offset: 0,
                duration: 1000,
                elasticity: 200,
                opacity: 1,
            })
            .add({
                targets: '#elasticity .claim',
                offset: 0,
                delay: 500,
                duration: 1000,
                opacity: 1,
            })
            .add({
                targets: '#elasticity .elasticity-0',
                translateX: 0,
                offset: 0,
                delay: 800,
                duration: 1000,
                elasticity: 200,
                opacity: 1,
            })
            .add({
                targets: '#elasticity .elasticity-100',
                translateX: 0,
                offset: 0,
                delay: 900,
                duration: 1000,
                elasticity: 200,
                opacity: 1,
            })
            .add({
                targets: '#elasticity .logoent',
                translateY: 0,
                offset: 0,
                delay: 1200,
                duration: 500,
                elasticity: 200,
                opacity: 1,
                complete: function(anim) {
                    animation();
                }
            });
    }); // end of document ready


    /*** Json ***/

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

    /*** Fi Json ***/

    var randomMovement = function() {
        return anime.random(0, 0) + 'rem'
    };

    var randomSpeed = function() {
        return anime.random(0, 10000) + 'rem'
    };

    function animation() {
        console.log("animation");

        var infiniteLoopAlternate = anime({
            targets: '#bubble1',
            translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
            translateY: [{ value: 600 }, { value: 400 }, { value: -200 }],
            opacity: [{ value: 0.4 }, { value: 0.5 }],
            easing: 'linear',
            duration: randomSpeed,
            direction: 'alternate',
            loop: true
        });

        var infiniteLoopAlternate2 = anime({
            targets: '#bubble2',
            translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
            translateY: [{ value: 600 }, { value: 400 }, { value: -400 }],
            opacity: [{ value: 0.4 }, { value: 0.2 }],
            easing: 'linear',
            duration: randomSpeed,
            offset: 100,
            direction: 'alternate',
            loop: true
        });

        var infiniteLoopAlternate3 = anime({
            targets: '#bubble3',
            translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
            translateY: [{ value: 600 }, { value: 400 }, { value: 200 }],
            opacity: [{ value: 0.4 }, { value: 0.2 }],
            easing: 'linear',
            duration: randomSpeed,
            offset: 0,
            direction: 'alternate',
            loop: true
        });

        var infiniteLoopAlternate4 = anime({
            targets: '#bubble4',
            translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
            translateY: [{ value: 600 }, { value: 400 }, { value: 100 }],
            opacity: [{ value: 0.4 }, { value: 0.2 }],
            easing: 'linear',
            duration: randomSpeed,
            offset: 300,
            direction: 'alternate',
            loop: true
        });

        var infiniteLoopAlternate5 = anime({
            targets: '#bubble5',
            translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
            translateY: [{ value: 600 }, { value: 400 }, { value: -100 }],
            opacity: [{ value: 0.4 }, { value: 0.2 }],
            easing: 'linear',
            duration: randomSpeed,
            offset: 100,
            direction: 'alternate',
            loop: true
        });

        var infiniteLoopAlternate6 = anime({
            targets: '#bubble6',
            translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
            translateY: [{ value: 600 }, { value: 400 }, { value: 200 }],
            opacity: [{ value: 0.4 }, { value: 0.2 }],
            easing: 'linear',
            duration: randomSpeed,
            offset: 0,
            direction: 'alternate',
            loop: true
        });

    }

})(jQuery); // end of jQuery name space
