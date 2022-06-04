//
// Copyright 2010-2019 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
//
// Author: Paul Pehrson (paul.pehrson@venafi.com)
//

 function supportlink() {
 	location.href = 'https://support.venafi.com';
 }

function feedbacklink() {
	var version = $("span#version").text(); //uses jquery to get the value of the span#version element, which is the version of TPP
	var email = "documentationfeedback@venafi.com"; //email address where feedback will be sent
	var heading = $("h1").text(); //uses jquery to pull the first H1 on the page to use in the email subject
	var filelink = (location.origin).concat(location.pathname); // Original URL
	var pathname2 = (location.pathname); // Just the path without the host
	var hrefattribute = "mailto:" + email + "?subject=Documentation Feedback for topic: " + heading + "&body=Title: " + heading + "%0D%0ADocumentation Version: " + version + "%0D%0AFile path: " + pathname2 + "%0D%0AOriginal URL: " + filelink + "%0D%0ADocumentation Feedback:%0D%0A%0D%0A"; // formats the mailto link

	location.href = hrefattribute; // actually re-directs you to the users email program 
}