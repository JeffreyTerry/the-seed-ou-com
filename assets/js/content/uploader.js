function getFile(){
  document.getElementById("image-input").click();
}

function substituteFileName(object){
  var file = $('#image-input').val();
  var fileName = file.split("\\");
  if(fileName[fileName.length - 1]){
    $('.image-button').html(fileName[fileName.length - 1]);
  }
  event.preventDefault();
}

function showProcessingModal(){
  $('#article-modal').modal();
  setTimeout(function(){
    if($('#article-spinner').length > 0){
      displayError();
    }
  }, 20000);
}

function displayError(){
  $('#article-spinner').remove();
  $('#article-modal').css('font-size', '18px');
  $('#article-modal').css('color', 'red');
  $('#article-modal-label').html('An error occurred. Please make sure your computer is not a carrot. Our systems do not play well with fully-grown plants.');
}

function displaySuccess(){
  $('#article-spinner').remove();
  $('#article-modal').css('font-size', '18px');
  $('#article-modal').css('color', '#298AC4');
  $('#article-modal-label').html('Upload successful');
}

var numberOfSuccessfulPosts = 0;  // used globally

function getImageFilename(){
  var image = $('#image-input').val();
  if(!image){
    return undefined;
  }
  image = image.split("\\");
  return image[image.length - 1];
}

function uploadImageFile(){
  var data = new FormData();
  data.append('imageFile', $('#image-input')[0].files[0]);
  $.ajax({
    url: '/upload/image',
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data){
      if(numberOfSuccessfulPosts > 0){
        displaySuccess();
      }else{
        numberOfSuccessfulPosts++;
      }
    }
  });
}

function uploadArticle(){
  var image = getImageFilename();
  var headline = $('#headline-input').val();
  var article = $('#article-input').val();
  var authentication = $('#authentication-input').val();

  // Validation
  if(!image && !confirm('Are you sure you want to submit this article without an image?')){
    return;
  }
  if(!headline){
    alert('Please enter a headline');
    return;
  }
  if(!article){
    alert('Please enter article content');
    return;
  }
  if(!authentication){
    alert('Please enter authentication details');
    return;
  }

  showProcessingModal();  // Give the user the current status of the post
  numberOfSuccessfulPosts = 0;

  // Upload the stuff
  if(image){
    uploadImageFile();
  }
  $.post('/upload/article', {pass: authentication, image: image, headline: headline, article: article, date: new Date()}, function(data){
    if(!data.err){
      if(numberOfSuccessfulPosts > 0){
        displaySuccess();
      }else{
        numberOfSuccessfulPosts++;
      }
    }else{
      displayError();
    }
  });
}

function uploadHeadline(){
  var image = getImageFilename();
  var headline = $('#headline-input').val();
  var article = $('#article-input').val();
  var authentication = $('#authentication-input').val();

  // Validation
  if(!image && !confirm('Are you sure you want to submit this headline without an image?')){
    return;
  }
  if(!headline){
    alert('Please enter a headline');
    return;
  }
  if(article){
    alert('You are not sending this in as an article. Please clear the article field.');
    return;
  }
  if(!authentication){
    alert('Please enter authentication details');
    return;
  }

  showProcessingModal();  // Give the user the current status of the post
  numberOfSuccessfulPosts = 0;

  // Upload the stuff
  if(image){
    uploadImageFile();
  }
  $.post('/upload/headline', {pass: authentication, image: image, headline: headline, article: article, date: new Date()}, function(data){
    if(!data.err){
      if(numberOfSuccessfulPosts > 0){
        displaySuccess();
      }else{
        numberOfSuccessfulPosts++;
      }
    }else{
      displayError();
    }
  });
}






