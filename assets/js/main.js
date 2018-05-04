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

jQuery(function($){
    //var NY = Math.round((new Date('1/01/2015 00:00:01')).getTime()/1000);
    $('#countdown').flipcountdown({
        size:'lg',
        beforeDateTime:'9/28/2018 00:00:01'
        /*tick:function(){
            var nol = function(h){
                return h>9?h:'0'+h;
            }
            var	range  	= NY-Math.round((new Date()).getTime()/1000),
                secday = 86400, sechour = 3600,
                days 	= parseInt(range/secday),
                hours	= parseInt((range%secday)/sechour),
                min		= parseInt(((range%secday)%sechour)/60),
                sec		= ((range%secday)%sechour)%60;
            return nol(days)+' '+nol(hours)+' '+nol(min)+' '+nol(sec);
        }*/
    });
});