( function () {
    'use strict';
    var nav     = document.getElementById( 'content-nav' ),
        openAll = function () {
            var closed = nav.querySelectorAll( '.fancytree-exp-c .fancytree-expander,' +
                                               '.fancytree-exp-cl .fancytree-expander' );
            if ( closed ) {
                closed.forEach( function ( el ) {
                    el.click();
                } );
            }
            setTimeout( openAll, 100 );
        };
    if ( nav ) {
        openAll();
    }
}() );
