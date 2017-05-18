var numDays = 3
var minDay = 21

document.getElementById('nextDayButton').addEventListener('click', function (e) {
  var currDay = e.target.dataset['currday']
  var newDay = minDay + ((currDay - minDay + 1) % 3)
  window.location.href = 'list_' + newDay + '.html'
})

document.getElementById('prevDayButton').addEventListener('click', function (e) {
  var currDay = e.target.dataset['currday']
  var newDay = minDay + ((currDay - minDay - 1 + 3) % 3)
  window.location.href = 'list_' + newDay + '.html'
})
