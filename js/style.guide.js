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
 */
(function ($, w) {
  /**
   * Use ONLY private variables inside module
   * or use `let` and `const` if it possible in your project
   */
  var version = '1.0'

  /**
   * Simple cache function for jQuery lookup with lazy loading
   * its needs for avoid spend time and memory to init and store jQuery objects
   */
  var $function = function (selector) {
    var elements
    /**
     * @return jQuery
     */
    return function () {
      if (!elements) {
        elements = $(selector)
      }
      return elements
    }
  }

  /**
   * Define simple functions
   */
  var $headers = $function('h2')
  var $articles = $function('article')

  /**
   * Only ONE function for handle document ready event
   * Use syntax $(fnc) for it
   */
  $(function () {
    // use function-element for cache selector
    // use `on` syntax, to easy support event handler
    // use namespace to prevent side-effect with another handlers
    // use simple named function as callback, for readability and reusability
    $headers().on('click.styleguide', loadJSON)

    // use `on` for live events
    $articles().on('click.styleguide', 'p', changeColorToGreen)
  })

  /**
   * Simplest functions with nice names
   *  - load smth - e.g. loadUsers
   *  - change smth to smth - changeColorToRed
   *  - hide smth - hideLoginForm
   *  - show smth - showErrorModal
   *  - toggle smth - toggleMap, toggleMapLayer
   */

  /**
   * AJAX function COULD forward context to callbacks
   * @param event
   */
  function loadJSON (event) {
    $.ajax('ajax/example.json', { context: event.currentTarget })
      .done(changeColorToGreen)
      .fail(changeColorToRed)

  }

  /**
   * Simple function with readable name
   */
  function changeColorToGreen () {
    $(this).css('color', 'green')
  }

  /**
   * Another simple function with readable name
   */
  function changeColorToRed () {
    $(this).css('color', 'red')
  }

})(jQuery, window)
