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



    $("#preview").click(function() {
        //var arr = {};
        var arr = [];

        $(".fieldwrapper").each(function() {
            var entry = {};
            var nom = $(this).find("input[id='name']").val();
            var cognoms = $(this).find("input[id='lastName']").val();
            var email = $(this).find("input[id='email']").val();
            var pass = $(this).find("input[id='password']").val();
            var idProf = parseInt($(this).find("input[id='idProfile']").val());
            entry["name"] = nom;
            entry["lastName"] = cognoms;
            entry["email"] = email;
            entry["password"] = pass;
            entry["idProfile"] = idProf;
            arr.push(entry);
        });

        //alert(JSON.stringify(arr));
        formData=JSON.stringify(arr);
        formData = formData.replace(/[\[\]]/g, "");
        //alert(formData);
      
        $.ajax({
            type: "POST",
            url: "https://itacademybcn.herokuapp.com/hackaton/users",
            data: formData,
            success: function() { alert('ok!'); },
            error: function (request, status, error) { alert(formData); },
            contentType : "application/json"
        });
  
    });



    /*    
        $("#add").click(function() {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var name = $("<input type=\"text\" name=\"neighborhood\" placeholder=\"Name of Neighborhood\"class=\"fieldname\" />");
               var url = $("<input type=\"text\" name=\"url\" placeholder=\"Paste here the URL of the Image\"class=\"fieldname\" />");

            var removeButton = $("<input type=\"button\"class=\"remove\" value=\"Remove\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(name);
                    fieldWrapper.append(url);

            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        });
    */

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
