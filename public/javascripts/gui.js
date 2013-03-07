function loadGui() {

    var tc = $j("<div></div>");
    tc.css({
        'position': 'fixed',
        'width' : '100%',
        'height' : '40px',
        'margin' : '15px auto',
        'top' : '0px',
        'left' : '0px',
        'background-color' : 'white',
        'border-bottom' : '1px solid black'
    });

    $j('body').append(tc);
}