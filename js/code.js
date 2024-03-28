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
      let code;
      if ($(this).prev().is('code')) {
        code = $(this).prev().text()
      } else {
        code = this.innerText
      }
      if (code) {
        let els = eval(code)
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
