// Model
var counter = 0;

// View
function updateCount() {
    counterStatus = (counter > 100) ? 'tooHigh' : (counter < 0) ? 'tooLow' : '';
    $('#counter').text(counter).removeClass().addClass(counterStatus);
}

// Controller
$('.decrement').click(function(){
    counter--;
    updateCount();
});
$('.reset').click(function(){
    counter=0;
    updateCount();
});
$('.increment').click(function(){
    counter++;
    updateCount();
});

$(document).ready(updateCount);