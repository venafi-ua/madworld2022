//
// Copyright 2021-2022 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
// Purpose: To provide accessible output for MadCap Flare HTML pages that is not native to Flare
//
// Location:[git]\Documentation\TPP Project\Content\Resources\MasterPages\scripts
// Requires:    jQuery 3.4.1+
//              MadCap Flare 2021 R2
//              
//   
//
// Author: Paul Pehrson (paul.pehrson@venafi.com)
//

$( window ).on( "load", function() { // on load waits until the page is fully loaded then does the followng: 
    removeSideMenu();
	prependIcons();
});


function removeSideMenu() { //used on home page to remove sidenav. This is better than hiding it because it is more accessible this way. 
	$( "nav.sidenav-wrapper" ).remove();
	console.log("Sidenav removed from home page");
}

function prependIcons() { //used on home page to prepend icons and text for accessibility
	$('li:has(a.new)').removeClass("new").prepend($('<span class="icon-new" aria-label="New" role="image"></span>'));
	$('li:has(a.updated)').removeClass("updated").prepend($('<span class="icon-updated" aria-label="Updated" role"image"></span>'));
	console.log("New and Updated icons added");

}