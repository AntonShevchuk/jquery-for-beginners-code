/**
 * Run inline code
 *
 * @author Anton Shevchuk
 */
(function ($, undefined) {
  $(function () {
    $('code + button').click(function () {
      let code = $(this).prev().text()
      let replace = $(this).prev().data('replace')
      let append = $(this).prev().data('append')

      if (replace) {
        eval(`replaceOutput("${replace}", ${code})`)
      } else if (append) {
        eval(`appendOutput("${append}", ${code})`)
      } else {
        eval(code)
      }
    })

    // apply style from button
    $('button[data-style]').click(function (){
      let rule = this.innerText
      $('head').append('<style>' + rule + '</style>')
      return false;
    })

    // highlight jquery element
    $('button[data-highlight]').click(function () {
      let fnc = this.innerText
      if (fnc) {
        let els = eval(fnc)
        els
          .stop(true, true)
          .animate({ 'background-color': '#ff5' }, 500)
          .delay(100)
          .animate({ 'background-color': '#fff' }, 500)
      }
    })
  })
})(jQuery)

function replaceOutput (selector, text) {
  if (text === '') text = ''
  $(selector).find("code").text(text)
}

function appendOutput (selector, text) {
  $(selector).find("code").append(text + "\n")
}

function output (text) {
 appendOutput("#output", text)
}
