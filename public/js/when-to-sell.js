var calculateWhenToSell = function () {
  $('#when-to-sell-form').submit(function (event) {
    event.preventDefault()

    var initialInvestment = parseFloat($('#initialInvestment').val())
    var targetIncome = parseFloat($('#targetIncome').val())
    var buyNow = parseFloat($('#buyNow').val())

    var buyInitial = $('#buyInitial').val()
    var sellInitial = $('#sellInitial').val()

    if (buyInitial === '' || sellInitial === '') {
      buyInitial = 1
      sellInitial = 1
    } else {
      buyInitial = parseFloat(buyInitial)
      sellInitial = parseFloat(sellInitial)
    }

    var answer = (targetIncome * buyInitial * buyNow) / (initialInvestment * sellInitial)

    var answerDom = $('#when-to-sell-calculate')
    answerDom.find('#when-to-sell-answer').html(answer)
    answerDom.removeAttr('hidden')
  })
}

var resetWhenToSell = function () {
  $('#when-to-sell-reset').click(function () {
    $('#when-to-sell-calculate').attr('hidden')
  })
}
