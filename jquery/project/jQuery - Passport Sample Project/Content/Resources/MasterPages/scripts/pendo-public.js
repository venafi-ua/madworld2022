﻿//
// Copyright 2010-2019 Venafi, Inc.
// All Rights Reserved.
//
// This program is unpublished proprietary source code of Venafi, Inc.
// Your use of this code is limited to those rights granted in the license between you and Venafi.
//
// Author: Paul Pehrson (paul.pehrson@venafi.com)
//
	
	// Pendo
	(function(apiKey){
	(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
	v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
		o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
		y=e.createElement(n);y.async=!0;y.src='https://cdn.analytics.venafi.com/agent/static/'+apiKey+'/pendo.js';
		z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

		pendo.initialize({
		visitor: {
		id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in

		},

		account: {

		}
		});
		})('2f3af388-6337-4e3f-76c9-cccb918e3323');



	//enable Google Analytics
	// Google Analytics-provided code
	
	/* Removing Analytics as part of strict Content Security Policy changes in 22.2

	(function(i, s, o, g, r, a, m){i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function(){
					(i[r].q = i[r].q || []).push(arguments)},i[r].l = 1 * new Date();a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-77660145-1', 'auto');
	ga('send', 'pageview');

*/