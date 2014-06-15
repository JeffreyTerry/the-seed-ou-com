function goto(url){
  if(url.slice(0, 1) !== 'http'){
    window.location += url;
  }
}