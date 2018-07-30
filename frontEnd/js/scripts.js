var errorText=false;

(function($) {
    $(function() {

/* modals per quan estem utilitzant ajax (llegeix i escriu json's) */


      $.ajaxSetup({
          'beforeSend' : function() {
              swal({
                //type: 'warning',
                title: '<span style="color:#fff">Una mica de paciència ;-)</span>',
                showConfirmButton: false,
                imageUrl: 'img/nyan-cat.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'carregant...',
                allowOutsideClick: false,
                allowEscapeKey: false,
                background: '#6698e7',
              });
          },
          'complete'   : function() {
            console.log(errorText);

            if(errorText==false) {
              swal.close();
            } else {
              errorModal();
              errorText=false;
            }
          }
      });

/** Animació elements entrada **/

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
                targets: '#elasticity .inputfila01',
                translateX: 0,
                offset: 0,
                delay: 800,
                duration: 1000,
                elasticity: 200,
                opacity: 1,
            })
            .add({
                targets: '#elasticity .inputfila02',
                translateX: 0,
                offset: 0,
                delay: 800,
                duration: 1000,
                elasticity: 200,
                opacity: 1,
            })
            .add({
                targets: '#elasticity .inputfila03',
                translateX: 0,
                offset: 0,
                delay: 800,
                duration: 1000,
                elasticity: 200,
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
                offset: 0,
                delay: 1200,
                duration: 2500,
                elasticity: 0,
                opacity: 1,
                complete: function(anim) {
                    animation();
                }
            });

/** Fi Animació elements entrada **/
    });

// end of document ready

function errorModal() {
  swal({
  type: 'error',
  title: 'Ups!',
  text: 'Torna-ho a provar...',
  });
}


/*** Json ***/

    $("#enviar-generico").click(function() {
        //var arr = {};
        var arr = [];

        $(".fieldwrapper").each(function() {
            var entry = {};
            var nom = $(this).find("input[id='name']").val();
            var cognoms = $(this).find("input[id='lastName']").val();
            var email = $(this).find("input[id='email']").val();
            var pass = $(this).find("input[id='password']").val();
            var idProf = parseInt($(this).find("input[id='idProfile']").val());
            var idEnt = parseInt($(this).find("input[id='idEntity']").val());
            entry.name = nom;
            entry.lastName = cognoms;
            entry.email = email;
            entry.password = pass;
            entry.idProfile = idProf;
            entry.idEntity = idEnt;
            arr.push(entry);
        });

        //alert(JSON.stringify(arr));
        formData=JSON.stringify(arr);
        formData = formData.replace(/[\[\]]/g, "");
        //alert(formData);

        $.ajax({
            type: "POST",
            url: "https://cors-anywhere.herokuapp.com/https://itacademybcn.herokuapp.com/hackaton/users",
            data: formData,
            success: function() { alert('ok!'); },
            error: function (request, status, error) { alert(formData); },
            contentType : "application/json"
        });
    });


    /* crea un votant */

    $("#crea-votant").click(function() {
        var arr = [];

        $(".fieldwrapper").each(function() {
            var entry = {};
            var nom = $(this).find("input[id='name']").val();
            var cognoms = $(this).find("input[id='lastName']").val();
            var email = $(this).find("input[id='email']").val();
            var pass = $(this).find("input[id='password']").val();
            var idProf = parseInt($(this).find("input[id='idProfile']").val());
            var idEnt = parseInt($(this).find("input[id='idEntity']").val());
            entry.name = nom;
            entry.lastName = cognoms;
            entry.email = email;
            entry.password = pass;
            entry.idProfile = idProf;
            entry.idEntity = idEnt;
            arr.push(entry);
        });

        //alert(JSON.stringify(arr));
        formData=JSON.stringify(arr);
        formData = formData.replace(/[\[\]]/g, "");
        //alert(formData);

        $.ajax({
            type: "POST",
            url: "https://cors-anywhere.herokuapp.com/https://itacademybcn.herokuapp.com/hackaton/users",
            data: formData,
            success: function() { console.log('ok!');
            window.location.href = "evento_users.html"; },
            error: function (request, status, error) { alert(formData); },
            contentType : "application/json"
        });
    });

/* crea evento */

    $("#enviar-crea_evento").click(function() {
        //var arr = {};
        var arr = [];

        $(".fieldwrapper").each(function() {
            var entry = {};
            var nom = $(this).find("input[id='creaevent-nom']").val();
            var descripcio = $(this).find("textarea[id='creaevent-descrip']").val();
            var idType = parseInt($(this).find("input[id='idTypeEvent']").val());
            entry.title = nom;
            entry.description = descripcio;
            entry.idTypeEvent = idType;
            arr.push(entry);
        });

        //alert(JSON.stringify(arr));
        formData=JSON.stringify(arr);
        formData = formData.replace(/[\[\]]/g, "");
        //alert(formData);

        $.ajax({
            type: "POST",
            // Com que de moment només treballem amb una entitat, la url queda fixe amb la entitat 1...
            url: "https://cors-anywhere.herokuapp.com/https://itacademybcn.herokuapp.com/hackaton/entities/1/events",
            data: formData,
            success: function() { console.log('ok!');
            window.location.href = "listar_eventos.html";
            },
            //success: function (request, status, error) { alert(formData); },
            error: function (request, status, error) { alert(formData); },
            contentType : "application/json"
        });
    });

/* login user */

    $("#enviar-login-user").click(function() {
        var arr = [];
        var profile;
        $(".fieldwrapper").each(function() {
            var entry = {};
            var user = $(this).find("input[id='email']").val();
            var pass = $(this).find("input[id='password']").val();
            var idProf = parseInt($(this).find("input[id='idProfile']").val());
            entry.email = user;
            entry.password = pass;
            entry.idProfile = idProf;
            arr.push(entry);
            profile = idProf;
        });
        formData=JSON.stringify(arr);
        formData = formData.replace(/[\[\]]/g, "");
        console.log(profile);

        $.ajax({
            type: "POST",
            url: "https://cors-anywhere.herokuapp.com/https://itacademybcn.herokuapp.com/hackaton/login",
            data: formData,
            success: function() {
              console.log('ok!');
              if (profile==1) {
                window.location.href = "listar_eventos.html";
              } else {
                window.location.href = "listar_eventos_users.html";
              }
            },
            error: function (request, status, error) {
              console.log(formData);
              errorText = true;
            },
            contentType : "application/json"
        });
    });

/* Recollir llista d'events i parsejar-los */

  $("#agafa_events").click(function() {
    $.getJSON('https://cors-anywhere.herokuapp.com/https://itacademybcn.herokuapp.com/hackaton/entities/1/events', function(json) {
        $.each(json, function() {
          $('#events').append('<div class="col s12 m4">Titol:  ' + this.title + '</div>');
          $('#events').append('<div class="col s12 m8">Descripció: '+ this.description +'</div>');
        });
    });
  });

  function llista_events() {
    $.getJSON('https://cors-anywhere.herokuapp.com/https://itacademybcn.herokuapp.com/hackaton/entities/1/events', function(json) {
        $.each(json, function() {
            $('#events').append('<div class="col s12 m4">Titol:  ' + this.title + '</div>');
            $('#events').append('<div class="col s12 m8">Descripció: '+ this.description +'</div>');
        });
    });
  }

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

/** Efecte fons **/

    var randomMovement = function() {
        return anime.random(0, 0) + 'rem';
    };

    var randomSpeed = function() {
        return anime.random(0, 10000) + 'rem';
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
