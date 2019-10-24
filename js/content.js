

var videoPosts = [];
var html = `
<div id="outer-container">
    <div id="close-button"></div>
	<div id="iframe-container">
		<iframe id="iframe22" scrolling="no" frameborder="0" src="crs" allowfullscreen></iframe>
	</div>
</div>`;

function findVideoPosts(){
    videoPosts = [];
    var posts = $('[data-tag="post-card"]');
    $(posts).each(function(){
        if($(this).find("figure[title='video thumbnail']").length) {
            videoPosts.push(this);
        }
    });
}

function addButtons(){
    for (var i=0; i<videoPosts.length; i++) {
        // Assign ids to video posts
        var post = videoPosts[i];
        var istr = i.toString();
        var postId = 'p'+istr;
        // Only add buttons if video posts don't exist
        if(!$('#'+postId).length) {
            post.id = postId; // set post id
            let parent = $(post).find("figure[title='video thumbnail']").parent().get(0);
            var buttonid = "b" + istr;
            parent.insertAdjacentHTML('afterbegin', `<div class="popup-button" title="Open video player" id="${buttonid}"></div>`);
            var button = $(`#${buttonid}`);
            button[0].style.backgroundImage = "url(" + chrome.extension.getURL("images/popup.png") + ")";
            button.click(function () {
                buttonPressed(this);
            });
        }
    }
}

function buttonPressed(button){
	var id = button.id;
	id = id.replace('b', "");
	var post = $('#p'+id)[0];
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

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes){
            curNumberOfVideos = $(document).find("figure[title='video thumbnail']").length;
            if(curNumberOfVideos > prevNumberOfVideos) {
                prevNumberOfVideos = curNumberOfVideos;
                findVideoPosts();
                addButtons();
            }
        }
    })
});

var prevNumberOfVideos = 0;
var curNumberOfVideos = 0;

observer.observe($('.sc-bxivhb.cLPxuX')[0], {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
});
