function displayError(){
  $('#application-spinner').remove();
  $('#application-modal').css('font-size', '18px');
  $('#application-modal').css('color', 'red');
  $('#application-modal-label').html('An error occurred. Please make sure your computer is not a carrot. Our systems do not play well with fully-grown plants.');
}

function sendApplication(){
  var name = $('#name-input').val();
  var email = $('#email-input').val();
  var sampleHeadlines = $('#sample-headlines-input').val();
  var sampleArticle = $('#sample-article-input').val();
  if(!name){
    alert('Please provide a name');
    return;
  }
  if(!email){
    alert('Please provide an email address');
    return;
  }
  if(!sampleHeadlines){
    alert('Please provide a few sample headlines');
    return;
  }
  if(!sampleArticle){
    alert('Please provide a sample article');
    return;
  }
  $('#application-modal').modal();
  setTimeout(function(){
    if($('#application-spinner').length > 0){
      displayError();
    }
  }, 20000);
  $.post('/application', {name: name, email: email, sampleHeadlines: sampleHeadlines, sampleArticle: sampleArticle}, function(data){
    if(!data.error){
      $('#application-spinner').remove();
      $('#application-modal').css('font-size', '18px');
      $('#application-modal').css('color', '#298AC4');
      $('#application-modal-label').html('Thank you for applying to be a part of the Seed, OU\'s first, second, and only plant-based news outlet. Your application has been sent! We\'ll get back to you in about 1 - 2 weeks.');
    }else{
      displayError();
    }
  });
  // alert('Thank you for contributing to the Seed, OU\'s first, second and only plant-based news outlet! Your proposal has been sent!');
}



