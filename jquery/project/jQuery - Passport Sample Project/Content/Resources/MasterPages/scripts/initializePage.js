//
// Copyright 2010-2021 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
//
// Author: Paul Pehrson (paul.pehrson@venafi.com)
//

$(document).ready(function(){
    initPendo(); // Runs the Pendo function to get Pendo and Google Analytics data. 
    filterTable(); // Runs the Filter Table function to allow you to filter table rows. 
    languageTabs(); //Runs the languageTabs function (in filterDiv.js) to create multiple tabs for code samples
    watchEventHandlers(); // We have an event handler to watch for changes to the drop down version, as well as clicks on the doc feedback link
});

$( window ).on( "load", function() { // on load waits until the page is fully loaded then does the followng: 
    fixText();
});

$("ul.navigation").on("loaded", function () { // Fires after the top-nav menu has finished loading
    removeEmptyLinks();
 });

$( getExtension ); // check to see if PHP, if so, move PHP block 

$(window).scroll(function(){ // make top menu change size when scrolling
    if($(document).scrollTop() > 100) {
        $('nav').addClass('small');
       //$('a.logo').addClass('small');
    } else {
        $('nav').removeClass('small');
       // $('a.logo').removeClass('small');
    }
});

function watchEventHandlers() {
    $('#newVersionList').on('change', function() {
        console.log('Changed version');
        changeVersion();
    });
    $('p#docfeedback').on('click', function() { // started use in 21.1
        console.log('DocFeedback link clicked');
        feedbacklink();
    });
    $('button#docfeedback').on('click', function() { // last used in 20.4; can be removed with 22.4 release
        console.log('DocFeedback button clicked');
        feedbacklink();
    })
    $('#support').on('click', function() { // last used in 20.4; can be removed with 22.4 release
        console.log('Support button clicked');
        supportlink();
    });
}


function fixText(){
	replaceButtonText(); // Add text to Previous and Next topic buttons at bottom of topic page.
    fixRelatedTopics(); //Remove extra text from Alt in Related Topics image
    wrapTableHeader(); // MadCap imports Confluence table headers incorrectly. This script wraps the first row in a THEAD tag and moves it to the correct place in the table structure. 
    setAttributeText(); // run setAttributeText with default variable values (will fix print button attribute)
    addThumbnailText(); // This adds a small caption before imgage thumbnails telling users they can click on the image to see a larger version. 
}

function getExtension() { // if this is a PHP file we can do special stuff

    var extension = $("#myPhpValue").val(); // php stored the value of the extension in a hidden HTML input 
                                            // element with the ID of #myPhpValue, so we grab the value of that 
                                            // element and store it as a variable. 
    if (extension != null) {
            console.log('PHP says this is a PHP document');
            //$($('#phpinside')).insertAfter($('form.search'));	// Move the doc site version selector div to top of page after the skip to content, so it gets the tab first, which is important for accessibility
            console.log('The version picker was moved to under the search box');
    }
    $("div").removeClass("hideUntilLoaded"); //Keep div hidden until after it is moved
    console.log('The .hideUntilLoaded class was removed from all DIVs'); 
}

function replaceButtonText() { // needed for accssibility b/c MadCap dosn't insert the text correctly
    if ($( "button.previous-topic-button" ).length) {
            $( "div#bottomnav" ).find( "button.previous-topic-button" ).text( "Previous Topic" ); // puts text in the Previous Topic button at bottom of page
            $( "div#bottomnav" ).find( "button.next-topic-button" ).text( "Next Topic" ); // puts text in Next Topic button at bottom of page
            $( "div#bottomnav" ).find( "button.next-topic-button" ).attr( "title","Next Topic" ); // puts attribute in Next Topic button at bottom of page
            $( "div#bottomnav" ).find( "button.previous-topic-button" ).attr( "title","Previous Topic" ); // puts attribute in Previous Topic button at bottom of page
                console.log('The bottom navigation button text and attribute values have been added.');
    } else {
        console.log("No bottom navigation buttons on page");
    }
}

function fixRelatedTopics() { // needed for accessibility b/c Related Topics control icon is decorative, not infomrative.
    if ( $( "a.relatedTopics").length){ //check to see if related topics exist on page
        $("a.relatedTopics>span>img").removeAttr("alt");
        console.log("For 508 compliance, image alt text removed from Related Topics control because image is decorative not informative.");
    } else {
        console.log("No related topics on page");
    }
}

function wrapTableHeader() { // if there is a table inserted from Confluence, we need to wrap the first row in a thead element for accessibility and for table sorting. 
    if ($( "table.confluenceTable" ).length) { // check to see if a table with class confluenceTable exists on the page
          $("table.confluenceTable tr:lt(1)").wrapAll("<thead></thead>"); // if table exists, wrap the first row in a thead tag
          $('table.confluenceTable colgroup').after( $('table.confluenceTable thead') ); // move thead tag to be right after colgroup tag
          console.log("Confluence table header row created");
    } else {
      console.log("No confluence table on page"); // script didn't find a table with class confluenceTable on the page, so no further action was taken. 
    }
  }

function setAttributeText(findElement, findAttribute, newAttributeText) { // MadCap doesn't use attributes correctly on the topic toolbar, so we fix this for accessibility 
    if (findElement === undefined) { //if the findElement parameter in the function declaration does not have a value, then use what we put in the next row.
        findElement = "button.remove-highlight-button img"; // this is the element that has the attribute we want to replace
    }
    if (findAttribute === undefined) { //if the findAttribute parameter in the function declaration does not have a value, then use what we put in the next row.
        findAttribute = "alt"; // This is the name of th attribute whose value we want to modify
    }
    if (newAttributeText === undefined){ //if the newAttributeText parameter in the function declaration does not have a value, then use what we put in the next row.
      newAttributeText = "Remove Highlights" //This is the new attribute value
    }
    if ($( findElement ).length) { //make sure the element exists
        $( findElement ).attr( findAttribute, newAttributeText ); //set attribute
        console.log("The '" + findAttribute +"' value was set to '" + newAttributeText + "' for '" + findElement + "'.");
    } else {
        console.log("The element '" + findElement + "' does not exist on this page.");
    }
}
function addThumbnailText() {
    if ($( "img.imgthumbnail" ).length) {
        $("<span class='imgTxt'>Click image to expand</span>").insertBefore("img.imgthumbnail");
    }
    else if ( $( "img.imgthumbnail-sidemenufix").length) {
        $("<span class='imgTxt'>Click image to expand</span>").insertBefore("img.imgthumbnail-sidemenufix");
    }   
    else {
       console.log("No image thumbnails on this page.");
    }
}
function removeEmptyLinks() { // Our first-level TOPNav (Not side-nav) items are not actual links. For accessibility, we make it so you can't tab to them. (Instead you use the default MC behavior to tab to the hidden drop-down.)
    // This function is triggered at the top of this script when the menu has finished loading. 

    $('ul.navigation li a[href="javascript:void(0);"]').attr('tabindex','-1'); // Find any link in the top-navigation MadCap left empty, and add the attribuite tabindex=-1
    $('ul.nocontent.menu li[data-mc-id="0"] a[href="javascript:void(0);"]').attr('tabindex','-1'); // Find the first link in the side menu that MadCap left empty, and add the attribuite tabindex=-1

        console.log("Made empty navigation (list) links have tab-index of -1 for accesibility");

}

function removeEmptyLinks() { // Our first-level TOPNav (Not side-nav) items are not actual links. For accessibility, we make it so you can't tab to them. (Instead you use the default MC behavior to tab to the hidden drop-down.)
    // This function is triggered at the top of this script when the menu has finished loading. 

    $('a[href="javascript:void(0);"]').attr('tabindex','-1'); // Find any link that MadCap left empty, and add the attribuite tabindex=-1
        console.log("Made empty links have tab-index of -1 for accesibility");

}
