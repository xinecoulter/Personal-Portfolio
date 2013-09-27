$(document).ready(function() {

    $("#bio").click(function(event){
        event.preventDefault();
        newLocation = "/projects";
        $('body').fadeOut(500, newpage);
    });

    // $('body').css('display', 'none');
    $('body').fadeIn(1000);

    $('.portfolio-link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(500, newpage);
    });

    function newpage() {
        window.location = newLocation;
    }

});