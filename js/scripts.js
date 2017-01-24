var numberArray = function(n) {
  var array = [];
  for(var i = 1; i <= n; i += 1) {
    array.push([i]);
  };
  alert(array)
  return array;
};

var numberConverter = function(n) {
  var convert = numberArray(n);
  var lastArray = [];
  alert(convert)
  convert.forEach(function(n){
    if (n % 3 === 0 && n % 5 === 0){
      n = "ping-pong"
      lastArray.push(n)
      alert(lastArray)
    } else if (n % 5 === 0) {
        n = "pong";
        lastArray.push(n)
    } else if (n % 3 === 0) {
        n = "ping";
        lastArray.push(n)
    } else {
        lastArray.push(n)
    }
  });
  return lastArray;
};




$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#list").show();
    $("#explanation").show();
    var number = $("#userInput").val();
    var outPut = numberConverter(number);
    $('#list').append(outPut);
  });
});
