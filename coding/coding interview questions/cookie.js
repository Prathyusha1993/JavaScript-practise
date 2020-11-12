//cookie : it is a piece of data that is stores by in the computer to be accessed by your browser. they will be saved as key/value pairs
//create a cookie
document.cookie = "username=John";

//why do you need cokkie: are used to remember the information abour user profile(such s username)

//options in cookie:
 // i) by default cookiee is deleted when browsser is closed but you can change this behavior by setting expiry date
 document.cookie = "username=John; expires=sat 7 Nov 2020 12:00:00 UTC";
//2) by default cookie belongs to the current page, but you can tell the path parameter
document.cookie = "usernamr=John; path=/services";

//delete a cookie : by setting an expire date as a passed date, don't need to specify a cookie value.
document.cookie = "username=; expires=Fri, 07 Nov 2020 00:00:00 UTC; path=/;";

//difference between cookie, local storage and sesison storage:

//cookie : 
//accessed on client server : both client and server side
//Lifetime: as configure using expire date
//SSL support: supported
//Max data size:4kb

//local storage : 
//accessed on client server : client side
//Lifetime: untill deletd
//SSL support: Not supported
//Max data size: 5MB

//session storsge :
//accessed on client server : client side
//Lifetime: untill tab is closed
//SSL support: Not supported
//Max data size: 5MB
