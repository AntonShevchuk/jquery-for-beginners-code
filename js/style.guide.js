/**
 * jQuery Style Guide
 *
 * @author   Anton Shevchuk
 * @created  19.06.2017 13:14
 */

/**
 * All your code SHOULD be inside module
 *
 * @link http://learn.javascript.ru/closures-module
 *
 * @param jQuery $  - be sure `$` is `jQuery`
 * @param undefined - be sure `undefined` is undefined
 */
;(function($, undefined){
    /**
     * Private module variables
     */
    var version = '1.0';

    /**
     * Only ONE function for handle document ready event
     * Use syntax $(fnc) for it
     */
    $(function(){
        // use function-element for cache selector
        // use `on` syntax, to easy support event handler
        // use namespace to prevent side-effect with another handlers
        // use simple named function as callback, for readability and reusability
        $headers().on('click.styleguide', load_json_data);

        // use `on` for live events
        $('article').on('click.styleguide', 'p', change_color_to_green);
    });

    /**
     * jQuery element(s) as function
     */
    function $headers() {
        var _elements = $('h2');
        $headers = function() {
            return _elements;
        };
        return _elements;
    }

    /**
     * Simplest functions with nice names
     *  - load smth
     *  - change smth to smth
     *  - toggle smth
     *  - hide or show smth
     */

    /**
     * AJAX function COULD forward context to callbacks
     * @param event
     */
    function load_json_data(event) {
        $.ajax('ajax/example.json', {context: event.currentTarget})
            .done(change_color_to_green)
            .fail(change_color_to_red)
        ;
    }
    /**
     * Simple function with readable name
     */
    function change_color_to_green() {
        $(this).css('color', 'green');
    }
    /**
     * Another simple function with readable name
     */
    function change_color_to_red() {
        $(this).css('color', 'red');
    }

})(jQuery);
