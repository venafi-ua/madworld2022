//
// Copyright 2010-2020 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
//
// Author: Paul Pehrson (paul.pehrson@venafi.com)
//
$(function() {
  var $btns = $('.btn').click(function() {
    if (this.id == 'all') { // triggers if user clicks the button with id="all"
      console.log("Show All filter button clicked");
      $('#pagetopics > div').fadeIn(625);
    } else {
      var $classClicked = $('.' + this.id).fadeIn(625); // triggers is user clicks any other button
      console.log("Filter button clicked");
      $('#pagetopics > div').not($classClicked).hide();
    }
    $btns.removeClass('active'); //removes active class from the previously-clicked element
    $(this).addClass('active'); // adds active class to the current element
  });
});
function languageTabs(){

  var startLang= $('div.language-tabs > div.codeSample').data('lang'); // gets the first div with a language data attribute on the page and makes that the default language (So you don't have to be careful about marking a tab as active; it happens automatically)
  
  $('div.language-tabs > div.' + startLang).addClass('active'); // Mark the correct code snippet as active 
  console.log("start language is " + startLang);
  $('div.language-tabs > ul > li.' + startLang).addClass('active'); // mark the selected button as active
  $('div.language-tabs > div').not("." + startLang).hide()// Hide the non-selected code snippets 
  
  
  var $btns = $('.tab').click(function(){
  	var classClicked = $(this).attr('data-lang'); // get the value of the data-lang attribute and store in the classClicked var
    console.log('You clicked ' + classClicked); // write the value of the classClicked var to the console log

		// Show the correct tab and highlight the button
    $('div.language-tabs > div.'+ classClicked ).show(); // show the new code snippet
    $('div.language-tabs > ul > li.' + classClicked).addClass('active'); // mark the new code button as active
    
    // Hide the other tabs and remove highlight from the button
    $('div.language-tabs > div').not('.' + classClicked ).hide(); // hide all code snippets whose language was not clicked
    $('div.language-tabs > ul > li').not('.' + classClicked).removeClass('active'); // Remove the active class from the old language button
        
  });
}