// chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
//         //console.log(JSON.stringify(details));
//         var headers = details.requestHeaders,
//             blockingResponse = {};
//
//         // Each header parameter is stored in an array. Since Chrome
//         // makes no guarantee about the contents/order of this array,
//         // you'll have to iterate through it to find for the
//         // 'User-Agent' element
//         for( var i = 0, l = headers.length; i < l; ++i ) {
//             if( headers[i].name == 'User-Agent' ) {
//                 headers[i].value = '>>> Your new user agent string here <<<';
//                 console.log(headers[i].value);
//                 break;
//             }
//             // If you want to modify other headers, this is the place to
//             // do it. Either remove the 'break;' statement and add in more
//             // conditionals or use a 'switch' statement on 'headers[i].name'
//         }
//
//         blockingResponse.requestHeaders = headers;
//         return blockingResponse;
//     },
//     {urls: [ "<all_urls>" ]},['requestHeaders','blocking']);
// chrome.webRequest.onCompleted.addListener((req) => {
//     console.log('onBeforeSendHeaders');
//     req.requestHeaders.forEach(function(header, index){
//         console.log(header.name+':', header.value);
//         if (headers[header.name.toLowerCase()]) {
//             console.log('set header:'+header.name, 'to:'+headers[header.name.toLowerCase()]);
//             req.requestHeaders[index].value = headers[header.name.toLowerCase()]
//         }
//     });
//     return {requestHeaders: req.requestHeaders};
// },{
//     urls: ['*://*.patreon.com/*'],
//     types: ["*"]
// },[
//     'blocking',
//     'requestHeaders'
// ]);

// chrome.webRequest.onBeforeRequest.addListener(
//     function(info) {
//         console.log("Cat intercepted: " + info.url);
//         // Redirect the lolcal request to a random loldog URL.
//         var i = Math.round(Math.random() * loldogs.length);
//         return {redirectUrl: loldogs[i]};
//     },
//     // filters
//     {
//         urls: [
//             "https://www.patreon.com/*"
//         ],
//         types: ["image"]
//     },
//     // extraInfoSpec
//     ["blocking"]);
// console.log('hi');

chrome.runtime.onInstalled.addListener(function() {
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        if(request.cmd === "read_file") {
            $.ajax({
                url: chrome.extension.getURL("index.html"),
                dataType: "html",
                success: sendResponse
            });
        }
    });
});
// 'use strict';
//
// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.create({url: 'index.html'});
// });