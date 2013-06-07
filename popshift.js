/**
 * 
 * repositioning bootstrap popovers
 * 
 * @author hsnmtw
 * @param {type} $
 * @returns {undefined}
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.popshift = function(placement,top,left){
        var arrow = this.find('.arrow');
        
        var atop = parseInt(arrow.css('top').replace('px',''));
        var aleft = parseInt(arrow.css('left').replace('px',''));
        
        var ptop = parseInt(this.css('top').replace('px',''));
        var pleft = parseInt(this.css('left').replace('px',''));
        
        this.css('left',(pleft+left)+ 'px');
        this.css('top', (ptop+top)+ 'px');
        
        switch(placement){
            case 'top':
            case 'bottom': arrow.css('left', (aleft-left)+ 'px'); break;
            case 'left':
            case 'right':  arrow.css('top',  (atop-top)+   'px'); break;
        }        
    };
}));

