/**
 * Run inline code
 *
 * @author   Anton Shevchuk
 */
(function($, undefined) {
    $(function(){
        $('pre + button').click(function(){
            var code = $(this).prev().text();
			if ($(this).prev().data('out')) {
				eval('out('+code+')');
			} if ($(this).prev().data('append')) {
                eval('appendOut('+code+')');
            } else {
				eval(code);
			}
        });
    });
})(jQuery);


function out(text) {
    if (!text) text = '';
    $('#output').find('pre').text(text);
}
function appendOut(text) {
    $('#output').find('pre').append(text);
}
