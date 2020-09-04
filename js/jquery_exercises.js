(function() {
    'use strict';

    $(document).ready(function() {
        alert( 'The DOM has finished loading!' );
        $('h1').click((e) => {
            $(e.currentTarget).css('background-color', 'red');
        });
        $('p').dblclick(function() {
            $(this).css('font-size', '18px');
        });

        $('li').hover(
            function() {
                $(this).css('color', 'red');
            },
            function() {
                $(this).css('color', 'black');
            }
        );






    });
})();

