/*
    Project Name : Busines Consulting
    Author Company : SpecThemes
    Project Date: 5 June, 2017
    Template Developer: vsafaryan50@gmail.com
*/

"use strict";



$(document).ready(function() {



/**
>>>>>>>

Wanna include in your project?

More documentation on github:

https://github.com/cant89/gianni-accordion-js

>>>>>>>
**/

var gianniAccordion = (function(){
  return class {      
    
    transitionendEventName(){
      var i,
          el = document.createElement('div'),
          transitions = {
            'transition': 'transitionend',
            'OTransition': 'otransitionend',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
          };

      for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
          return transitions[i];
        }
      }
    }

    expand(el){
      function resetHeight(ev){
        if(ev.target != el.content) return
        el.content.removeEventListener(this.transitionendevent, bindEvent);

        if(!el.isOpen) return

        requestAnimationFrame(()=>{      
          el.content.style.transition = '0';
          el.content.style.height = 'auto';

          requestAnimationFrame(()=>{
            el.content.style.height = null;
            el.content.style.transition = null;

            this.fire("elementOpened", el);
          });
        });
      }

      var bindEvent = resetHeight.bind(this);
      el.content.addEventListener(this.transitionendevent, bindEvent);

      el.isOpen = true;
      el.content.style.height = el.content.scrollHeight + "px";
    }

    collapse(el){

      function endTransition(ev){     
        if(ev.target != el.content) return
        el.content.removeEventListener(this.transitionendevent, bindEvent);

        if(el.isOpen) return

        this.fire("elementClosed", el);
      }

      var bindEvent = endTransition.bind(this);
      el.content.addEventListener(this.transitionendevent, bindEvent);

      el.isOpen = false;    

      requestAnimationFrame(()=>{
        el.content.style.transition = '0';
        el.content.style.height = el.content.scrollHeight + "px";

        requestAnimationFrame(()=>{
          el.content.style.transition = null;
          el.content.style.height = 0;
        });
      });
    }

    open(el){
      el.selected = true;
      this.fire("elementSelected", el);
      this.expand(el);
      el.wrapper.classList.add(this.selectedClass);
    }

    close(el){
      el.selected = false;
      this.fire("elementUnselected", el);
      this.collapse(el);
      el.wrapper.classList.remove(this.selectedClass);
    }

    toggle(el){
      if(el.selected){
        this.close(el);
      } else {
        this.open(el);

        if(this.oneAtATime){        
          this.els.filter(e=>e!=el && e.selected).forEach(e=>{
            this.close(e);
          });
        }
      }
    }

    attachEvents(){    
      this.els.forEach((el, i)=>{
        el.trigger.addEventListener("click", this.toggle.bind(this, el));
      });
    }

    setDefaultData(){    
      this.els = [];
      this.events = {
        'elementSelected': [],
        'elementOpened': [],
        'elementUnselected': [],
        'elementClosed': []
      };
      this.transitionendevent = this.transitionendEventName();
      this.oneAtATime = true;
      this.selectedClass = "selected";
      this.trigger = "[data-accordion-element-trigger]";
      this.content = "[data-accordion-element-content]";
    }

    setCustomData(data){
      var keys = Object.keys(data);

      for(var i=0; i<keys.length; i++){
        this[ keys[i] ] = data[ keys[i] ];
      }
    }

    fire(eventName, el){
      var callbacks = this.events[eventName];
      for(var i=0; i<callbacks.length; i++){
        callbacks[i]( el )
      }
    }

    on(eventName, cb){
      if( !this.events[eventName] ) return       
      this.events[eventName].push(cb);
    }

    constructor(data){    
      this.setDefaultData();
      this.setCustomData(data); // ES6 => Object.assign(this, data)

      [].forEach.call( document.querySelectorAll(this.elements), (el, i)=>{
        this.els.push({
          wrapper: el,
          trigger: el.querySelector(this.trigger),
          content: el.querySelector(this.content)
        });

        this.els[i].content.style.height = 0;
      });

      this.attachEvents();
    }
    
  }
})();

var myAccordion = new gianniAccordion({
  elements: ".card article"
});

myAccordion.on("elementSelected", (data)=>{
  console.log("elementOpened", data);
});






//  ---- SLIDER JS ---- //

$('.gallery').initGallery({
    nav: ['<i class="icon-feather-arrow-left"></i>', '<i class="icon-feather-arrow-right"></i>'],
    close: "<i class='icon-line-awesome-close'></i>",
    aspectRatio: 3/2,
    dots: false,
    showNavIfOneItem: false,
    showNav: true,
    loop: false,
    autoplay: false,
    transition: "slide",

});

// $('.gallery')[3].initGallery({
//     aspectRatio: 3/2,
//     dots: true,
//     showDotsIfOneItem: false,
//     showNav: true,
// });

 // SLIDER JS END








    // ACARDION >  <

  // $('.collapse.in').prev('.panel-heading').addClass('active');
  // $('#accordion, #bs-collapse')
  //   .on('show.bs.collapse', function(a) {
  //     $(a.target).prev('.panel-heading').addClass('active');
  //   })
  //   .on('hide.bs.collapse', function(a) {
  //     $(a.target).prev('.panel-heading').removeClass('active');
  //   });






      //  SELECTOR ------------------

    $('.js-select-text').select2();



      //  SELECTOR --- CAR  ---------------

    // $('.js-select-car');




//  ADD IMAGES ****************

(function ($) {
  $(document).ready(function () {
    
    generateID()
    choose()
    generateOption()
    selectionOption()
    removeClass()
    uploadImage()
    
    var ID
    var way = 0
    var queue = []
    var fullStock = 10
    var speedCloseNoti = 1000
    
    function generateID() {
      var text = $('header span')
      var newID = ''
    
      for(var i = 0; i < 3; i++) {
      }
    }
    
    function choose() {
      var li = $('.ways li')
      var section = $('.sections section')
      var index = 0
      li.on('click', function () {
        index = $(this).index()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        
        section.siblings().removeClass('active')
        section.eq(index).addClass('active')
        if(!way) {
          way = 1
        }  else {
          way = 0
        }
      })
    }
    
    function generateOption() {
      var select = $('select option')
      var selectAdd = $('.select-option .option')
      $.each(select, function (i, val) {
          $('.select-option .option').append('<div rel="'+ $(val).val() +'">'+ $(val).html() +'</div>')
      })
    }
    
    function selectionOption() {
      var select = $('.select-option .head')
      var option = $('.select-option .option div')
    
      select.on('click', function (event) {
        event.stopPropagation()
        $('.select-option').addClass('active')
      })
      
      option.on('click', function () {
        var value = $(this).attr('rel')
        $('.select-option').removeClass('active')  
        select.html(value)
    
        $('select#category').val(value)
      })
    }
    
    function removeClass() {
      $('body').on('click', function () { 
        $('.select-option').removeClass('active')   
      })                  
    }
    
    function uploadImage() {
      var button = $('.images .pic')
      var uploader = $('<input type="file" accept="image/*" />')
      var images = $('.images')
      
      button.on('click', function () {
        uploader.click()
      })
      
      uploader.on('change', function () {
          var reader = new FileReader()
          reader.onload = function(event) {
            images.prepend('<div class="img" style="background-image: url(\'' + event.target.result + '\');" rel="'+ event.target.result  +'"><span>remove</span></div>')
          }
          reader.readAsDataURL(uploader[0].files[0])
  
       })
    
      // remove
      images.on('click', '.img', function () {
        $(this).remove()
      })
    
    }

  })
})(jQuery)



jQuery(document).ready(function($){

// Click button to activate hidden file input
$('.fileuploader-btn').on('click', function(){
  $('.fileuploader').click();
});

// Click above calls the open dialog box
// Once something is selected the change function will run
$('.fileuploader').change(function(){

// Create new FileReader as a variable
var reader = new FileReader();

// Onload Function will run after video has loaded
reader.onload = function(file){
  var fileContent = file.target.result;
  $('.add-video').append('<video src="' + fileContent + '" controls></video>');
}

// Get the selected video from Dialog
reader.readAsDataURL(this.files[0]);

});

});





//  FORM ---- Fill in all the fields

$("#car_add_form").submit(function(event){
    event.preventDefault();
    var error = 0;
    $(this).find("input.required").each(function(i,e){
        if($(e).val().length == 0){
            $(e).addClass("error");
            $(e).keyup(function(){
                if($(this).val().length > 0){
                    $(this).removeClass("error").addClass("success");
                }else{
                    $(this).addClass("error").removeClass("success");
                }
            });
            error++;
        }
    });
    $(this).find("select.required").each(function(i,e){
        console.log($(e).val());
        if($(e).val() == null){
            $(e).addClass("error");
            $(e).change(function(){
                if($(this).val().length > 0){
                    $(this).removeClass("error").addClass("success");
                }else{
                    $(this).addClass("error").removeClass("success");
                }
            });
            error++;
        }
    });
    if(error > 0){
        $(".error_msg").css("display","inline-block");
        return false;
    }
});











// --- REMODAL// ---- TEXT WIDTH  __ joblist text__

$(".cut_text").text(function(i, text) {

  if (text.length >= 150) {
    text = text.substring(0, 200);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }
  
  $(this).text(text);
  
});








 });





//  add-license-img -------------------

function readsURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

//  add-user-img ----

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah_2')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}



function rentURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah_02')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}







 $('.Show').click(function() {
        $('#targets').show(500);
        $('.Show').hide(0);
        $('.Hide').show(0);
    });

$('.Hide').click(function() {
    $('#targets').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});







//  HIDE TEXT ( INFO TEXT )

//  OWNER CAR  BUTTON---
$(document).ready(function(){
    $('#show_allert').click(function(){
        $('.owner-save-info').fadeIn(600);
    });
});


// RENT CAR   BUTTON---

$(document).ready(function(){
    $('#show_allert_2').click(function(){
        $('.rent-save-info').fadeIn(600);
    });
});












/* ----- POPUP FOR LOGIN & REG -----*/

function popup(){
  $("#popup_outer").fadeIn(500);
  $("#popup_outer .popup").animate({
      top:"0"
    },500);
}

$("#popup_outer").click(function(e){
  if(e.target == this){
    $(this).fadeOut(500);
    $("#popup_outer .popup").animate({
      top:"-120vh"
    },500);
  }
});

$("#popup_outer .popup .close-popup").click(function(e){
  $("#popup_outer").fadeOut(500);
  $("#popup_outer .popup").animate({
      top:"-120vh"
  },500);
});












      
