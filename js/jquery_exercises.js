(function() {
    'use strict';

    $(document).ready(function() {
        alert( 'The DOM has finished loading!' );
        $('li').css('font-size', '20px');
        alert($('h1').html());
        $('h1, p, li').css('background-color', 'yellow');





    });
})();

