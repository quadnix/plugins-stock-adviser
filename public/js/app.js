$(function () {
  // Read environment.
  var env = JSON.parse(environment)

  // Endpoints.
  var host = env.host
  var port = env.port
  var backendEndpoint = '//' + host + ':' + port

  // Enable tooltips.
  $('[data-toggle="tooltip"]').tooltip()

  // Set lead text on coming-soon tab.
  $('#coming-soon-tab').on('shown.bs.tab', function (event) {
    var tabId = $(event.target).attr('href')
    var $comingSoonElement = $(tabId)

    var backendRequest = $.get(backendEndpoint + '/api/coming-soon/lead')
      .done((data) => {
        console.log(data);
        $comingSoonElement.find('.lead').html(data)
      })
      .fail((error) => {
        console.log(error);
        $comingSoonElement.find('.lead').html('Data not available!')
      })
  })
})
