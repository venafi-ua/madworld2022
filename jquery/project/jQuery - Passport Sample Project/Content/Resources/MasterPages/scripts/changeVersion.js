//
// Copyright 2010-2022 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
//
// Author: Paul Pehrson (paul.pehrson@venafi.com)
//
//

function getCurrentVersion(){
    var pieces = window.location.href.split("/Docs/"); // split the URL after 'docs'
    pieces = pieces[1].split("/"); // find next folder below docs -- which is the current version
    var oldVersion = pieces[0]; // store the current version in a variable
    console.log('The current version is ' + oldVersion);
    return oldVersion;
}

function changeVersion(){
			
    var sel = document.getElementById('newVersionList'); //Get the selected version from the drop down
    newVersion = sel.value; // store the new value in a variable
    console.log('The selected newVersion is ' + newVersion); 
                             
    var oldVersion = getCurrentVersion();

    if (oldVersion == newVersion) {
        // do nothing
    } else {
        var theURL = window.location.toString(); // store current URL in a string variable
        var newLocation = theURL.replace(oldVersion, newVersion);
        console.log('The new location is going to be ' + newLocation);
        window.location = newLocation // replace the old version with the new version and reload the page

    } 
}