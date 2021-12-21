function round() {
  var value1_round = document.getElementById('value1_round').value
  var round_result = Math.round(value1_round)
  document.getElementById('round_result').value = round_result
}

function pow() {
  var value1_pow = document.getElementById('value1_pow').value
  var value2_pow = document.getElementById('value2_pow').value
  var pow_result = Math.pow(value1_pow, value2_pow)
  document.getElementById('pow_result').value = pow_result
}


function circle() {
  var value_radius = document.getElementById('value_radius').value
  var circumference_result = 2 * Math.PI * value_radius
  var area_result = Math.PI * Math.pow(value_radius, 2)
  document.getElementById('circumference_result').value = circumference_result
  document.getElementById('area_result').value = area_result
}


function cube() {
  var a_cube = document.getElementById('a_cube').value
  var base_area_result = Math.pow(a_cube, 2)
  var total_area_result = base_area_result * 6
  var volume_result = Math.pow(a_cube, 3)
  document.getElementById('base_area_result').value = base_area_result
  document.getElementById('total_area_result').value = total_area_result
  document.getElementById('volume_result').value = volume_result
}


function square_root() {
  var value_num = document.getElementById('value_num').value
  var square_root_result = Math.sqrt(value_num)
  document.getElementById('square_root_result').value = square_root_result
}