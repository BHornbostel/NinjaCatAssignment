$(document).ready(function(){
$('img').click(function() {
    var src = $(this).attr('src');
    console.log(src);
    var srcalt = $(this).attr('data-alt-src');
    console.log(srcalt);
    $(this).attr('src', srcalt);
    $(this).attr('data-alt-src', src);
    // if (src === "src"){
    //     $(this).attr('src', srcalt);
    //     console.log( $(this).attr('src'));
    // }
    // else {
    //     $(this).attr('src', src);
    //     console.log( $(this).attr('src'));
    // }
  });
});