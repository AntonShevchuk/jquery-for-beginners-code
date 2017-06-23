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
 * @param window w  - be sure `w` is `window`
 * @param undefined - be sure `undefined` is undefined
 */
;(function ($, w, undefined) {
  /**
   * Use ONLY private variables inside module
   */
  var version = "1.0";

  /**
   * Simple cache function for jQuery selector with lazy loading
   *
   *  Use function as cache mechanism for selectors
   *  its needs for avoid spend time and memory to init and store jQuery
   *
   */
  var _$ = function (selector) {
    var elements;
    /**
     * @return jQuery
     */
    return function () {
      if (!elements) {
        elements = $(selector);
      }
      return elements;
    }
  };

  /**
   * Define simple functions
   */
  var $headers = _$("h2");
  var $articles = _$("article");

  /**
   * Only ONE function for handle document ready event
   * Use syntax $(fnc) for it
   */
  $(function () {
    // use function-element for cache selector
    // use `on` syntax, to easy support event handler
    // use namespace to prevent side-effect with another handlers
    // use simple named function as callback, for readability and reusability
    $headers().on("click.styleguide", load_json_data);

    // use `on` for live events
    $articles().on("click.styleguide", "p", change_color_to_green);
  });

  /**
   * Simplest functions with nice names
   *  - load smth - e.g. load_users
   *  - change smth to smth - change_color_to_red
   *  - hide smth - hide_element
   *  - show smth - show_header
   *  - toggle smth - toggle_box, toggle_box_color
   */

  /**
   * AJAX function COULD forward context to callbacks
   * @param event
   */
  function load_json_data(event) {
    $.ajax("ajax/example.json", {context: event.currentTarget})
      .done(change_color_to_green)
      .fail(change_color_to_red)
    ;
  }

  /**
   * Simple function with readable name
   */
  function change_color_to_green() {
    $(this).css("color", "green");
  }

  /**
   * Another simple function with readable name
   */
  function change_color_to_red() {
    $(this).css("color", "red");
  }

})(jQuery, window);
