function displayError(){
  $('#suggestion-spinner').remove();
  $('#suggestion-modal').css('font-size', '18px');
  $('#suggestion-modal').css('color', 'red');
  $('#suggestion-modal-label').html('An error occurred. Please make sure your computer is not a carrot. Our systems do not play well with fully-grown plants.');
}

function sendHeadlineIdea(){
  var headline = $('#share-headline-input').val();
  if(!headline){
    return;
  }
  $('#suggestion-modal').modal();
  setTimeout(function(){
    if($('#suggestion-spinner').length > 0){
      displayError();
    }
  }, 20000);
  $.post('/headline/proposal', {headline: headline}, function(data){
    if(!data.error){
      $('#suggestion-spinner').remove();
      $('#suggestion-modal').css('font-size', '18px');
      $('#suggestion-modal').css('color', '#298AC4');
      $('#suggestion-modal-label').html('Thank you for contributing to the Seed, OU\'s first, second, and only plant-based news outlet. Your proposal has been sent!');
    }else{
      displayError();
    }
  });
  // alert('Thank you for contributing to the Seed, OU\'s first, second and only plant-based news outlet! Your proposal has been sent!');
}

$(document).ready(function(){
  $('#share-headline-input')[0].onkeypress = function(e){
      var event = e || window.event;
      var charCode = event.which || event.keyCode;
      if(charCode == '13'){
        sendHeadlineIdea();
        return false;
      }
  }
});


