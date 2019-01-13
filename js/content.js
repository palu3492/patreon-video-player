

var posts = [];
var html = `
<div id="outer-container">
    <div id="close-button"></div>
	<div id="iframe-container">
		<iframe id="iframe22" scrolling="no" frameborder="0" src="crs" allowfullscreen></iframe>
	</div>
</div>`;

function findVideoPosts(){
    var possiblePosts = document.querySelectorAll('[data-tag]');
    for (var i in possiblePosts) if (possiblePosts.hasOwnProperty(i)) {
    	var element = possiblePosts[i];
    	var dataTag = element.getAttribute('data-tag');
    	if(dataTag === 'post-card') {
    		if($(element).find("figure[title='video thumbnail']").length > 0) {
                posts.push(element);
            }
        }
    }
}

function addButtons(){
    for (var i=0; i<posts.length; i++) {
        var post = posts[i];
        var istr = i.toString();
        post.id = 'p'+istr;
        var buttonid = "b"+istr;
		post.insertAdjacentHTML('afterbegin', `<div class="popup-button" onclick="buttonPressed(this)" id="${buttonid}"></div>`);
        $(`#${buttonid}`)[0].style.backgroundImage = "url(" + chrome.extension.getURL("images/popup.png") + ")";
    }
}

function buttonPressed(button){
	var id = button.id;
	var post = $('#p'+id[1]);
    var playButton = $(post).find('button[title="Start playback"]');
	if(playButton.length === 1) {
        playButton.click();
    }
    var iframe1 = $(post).find('iframe')[0];
    var src = iframe1.src.split('=')[1].split('&')[0];
    var src2 = convertAllEscapes(src,1);
    var outerContainer = $("#outer-container");
	if(outerContainer.length < 1) {
        $("body")[0].insertAdjacentHTML('afterbegin', html.replace("crs", src2));
        var closeButton = $("#close-button");
        closeButton.on("mousedown", closePopup);
        closeButton[0].style.backgroundImage = "url(" + chrome.extension.getURL("images/closeIconWhite.png") + ")";
        var iframeContainer = $("#iframe-container");
        iframeContainer.resizable({
            aspectRatio: 16 / 9,
            maxHeight: 1080,
            maxWidth: 1920,
            minHeight: 230,
            minWidth: 400,
            handles: "se"
        });
        // console.log(iframeContainer[0].children[1]);
        // iframeContainer[0].children[1].style.backgroundImage = "url(" + chrome.extension.getURL("images/frameResize.png") + ")!important";
        // $(iframeContainer[0].children[1]).css("background-image", "url(" + chrome.extension.getURL("images/frameResize.png") + ")!important");
        iframeContainer.hover(handlerIn);
        $("#iframe22").hover(handlerIn);
    } else {
        $("#iframe22")[0].src = src2;
        outerContainer[0].style.visibility = "initial";
        outerContainer[0].style.display = "initial";
    }
}

function handlerIn(){
	if($("#iframe-container")[0].classList.value === 'ui-resizable ui-resizable-resizing'){
		$("#iframe22").addClass('iframe-resize');
	} else {
        $("#iframe22").removeClass('iframe-resize');
	}
}

function closePopup(){
    var outerContainer = $("#outer-container")[0];
    outerContainer.style.visibility = "hidden";
    outerContainer.style.display = "none";
    $("#iframe22")[0].src="";
}

findVideoPosts();
addButtons();