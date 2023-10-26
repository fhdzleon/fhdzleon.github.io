$(document).ready(function(){
    
    //? Insertamos el slider -->

    $(document).ready(function(){
        $(".slider").bxSlider({
            mode: 'fade',
            captions: 'false',
            slideWidth: 1400,
        });
      });

    //? Insertamos los post de manera ordenada por medio de peticion fetch -->

    $.get('data.json', {}, function (response) {
        response.data.forEach(element => {
            $('#posts').append(`
            <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>${element.intro}
            </p>
            <a href="" class="button-more">Leer más</a>
        </article>
            `)
        });

    })

        //? Capturamos eventos click para el cambio de tema
    var theme = $('#tema');

     $('#toGreen').click(function(){
        theme.attr('href', 'green.css');
        localStorage.setItem('tema',"green");
    })    

     $('#toPink').click(function(){
        theme.attr('href', 'pink.css');
        localStorage.setItem('tema',"pink");
    })

     $('#toRed').click(function(){
        theme.attr('href', 'red.css');
        localStorage.setItem('tema',"red");
    })

    var temaSeleccionado = localStorage.getItem('tema');

    if(temaSeleccionado) {
        theme.attr('href', temaSeleccionado+".css");
    }

        //? Scroll para regresar arriba

    

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    });

    //? login falso usando el local storage

    $('#login form').submit(function(){
        var usuario = $('#nameValue').val();
        localStorage.setItem('Usuario', usuario);
    });
    var usuarioLogeado = $('#logueado');

    var nombreUsuario = localStorage.getItem('Usuario');

    if(nombreUsuario !== null && nombreUsuario !== undefined) {
        usuarioLogeado.css('display','block');
        usuarioLogeado.html(`<strong>Bienvenide ${nombreUsuario} </strong>`)

        usuarioLogeado.append('<a id="logout">Cerrar sesión</a>')
            var logout = $('#logout');
            logout.css('width','100px')
            logout.css('height','25px')
            logout.css('text-align','center')
            logout.css('line-height', '25px')
            logout.css('color','white')
            logout.css('background','gray')
            logout.css('font-size','13px')
            logout.css('display','block')
            logout.css('float','right')
            logout.css('text-decoration','none')
            logout.css('cursor','pointer')
       
        $('#campos_form').hide();

        logout.click(function(){
            localStorage.clear();
            location.reload();
        })
        
    }



//! Fin del document. ready     
})