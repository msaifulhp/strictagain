$(function(){

    /***wow***/
     new WOW().init();
	/**nice scroll**/
	 $("html").niceScroll(); 
	 
	 /***light-box***/
      baguetteBox.run('.baguetteBoxFour', {
    buttons: true,
 });
        $(".page-loader").fakeLoader({
        spinner:"Spinner1",
        timeToHide:2000,
        zIndex:"3",
       });
        /***form validation***/
        $("#contacTForm").validate({

             rules:{
             	fname:{
             		required:true,
             	},
             	email:{
             		required:true,

             	},
             	textare:{
             		required:true, 
             	},
             	
             },
             messages:{
             		fname:{
             			required:"Please type your full name",
             	},
             	email:{
             		required:"Please type your email",
             	},

             	}

             
        });


});