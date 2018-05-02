$("a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
 
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 
 });

function writeMail(c) {
  a='ic'; b='imaginecode.org';
  val = $( "#" + c );
  val.text(a+'@'+b)
 }

 function writeMailLink(c) {
  a='ic'; b='imaginecode.org';
  val = $( "#" + c );
  val.attr('hre'+'f', 'mai'+'lto:'+a+'@'+b);
 }