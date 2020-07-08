$(function () {
  // Enable tooltips.
  $('[data-toggle="tooltip"]').tooltip()

  // Set lead text on coming-soon tab.
  $('#coming-soon-tab').on('shown.bs.tab', function (event) {
    var tabId = $(event.target).attr('href')
    var $comingSoonElement = $(tabId)
    $comingSoonElement.find('.lead').html('Tune in later to find out more useful stock advices.')
  })
})
