//
// Copyright 2018 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
// Purpose: To copy code samples from MadCap Flare output
// Location:[git]\Documentation\TPP Project\Content\Resources\MasterPages\scripts
// Requires: In OtherTopics.flmsp, declare docCopy.js
//           In html:  <div class="CodeSample"><MadCap:conditionalText MadCap:conditions="Default.ScreenOnly"><button onclick="CopytoClipboard(Example1)">Copy</button></MadCap:conditionalText>	
//                     <pre id="Example1" xml:space="preserve">
//                          
// Author: Virginia Kelley (virginia.kelley@venafi.com)
//
function CopytoClipboard(HtmlPreElement)
{
	var inp = document.createElement('textarea'); 
	document.body.appendChild(inp);
	inp.value = HtmlPreElement.textContent;
	inp.select();
	document.execCommand('copy', false);
	document.body.removeChild(inp);	
	alert("Copied to Clipboard.");
}