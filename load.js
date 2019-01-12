

var posts = [];
var html = `
<div id="outer-container">
    <div id="close-button" onclick="close()"></div>
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
		post.insertAdjacentHTML('afterbegin', `<div class="popout-button" onclick="buttonPressed(this)" id="b${istr}"></div>`);
    }
}

function buttonPressed(button){
	var id = button.id;
	var post = $('#p'+id[1]);
	// if video not loaded yet then click play to load it
    console.log($(post).find('button'));
	if(true) {
        $(post).find('button').click();
    }
    var iframe1 = $(post).find('iframe')[0];
    var src = iframe1.src.split('=')[1].split('&')[0];
    var src2 = convertAllEscapes(src,1);
    //if not already exists otherwise just change src
	if(true) {
        $("body")[0].insertAdjacentHTML('afterbegin', html.replace("crs", src2));
        $("#iframe-container").resizable({
            aspectRatio: 16 / 9,
            maxHeight: 1080,
            maxWidth: 1920,
            minHeight: 230,
            minWidth: 400,
            handles: "se"
        });
        $("#iframe-container").hover(handlerIn, function () {
        });
        $("#iframe22").hover(handlerIn, function () {
        });
    } else {
        var popout = $("#outer-container");
        popout.style.visibility = "initial";
        popout.style.display = "initial";
    }
}

function handlerIn(){
	if($("#iframe-container")[0].classList.value === 'ui-resizable ui-resizable-resizing'){
		$("#iframe22").addClass('iframe-resize');
	} else {
        $("#iframe22").removeClass('iframe-resize');
	}
}

// function findAllBoxes(){
// 	var boxes = [];
//
// 	try {
// 		var boxes1 = document.querySelector("div#featureDealsAndCoupons.gridCategory").children;
// 	}catch(err) {
// 		var boxes1 = document.querySelector("div#featureDealsAndCoupons.gridCategory.giveawayActive").children;
// 	}
// 	var boxes2 = document.querySelectorAll("div.gridCategory.removeHidden")[0].children;
// 	var boxes3 = document.querySelectorAll("div.gridCategory.removeHidden")[2].children;
// 	boxes.push.apply(boxes,boxes1);
// 	boxes.push.apply(boxes,boxes2);
// 	boxes.push.apply(boxes,boxes3);
// 	return boxes;
// }

// function findAllNonAmazon(boxes){
// 	var box = null;
// 	var anchorTag = null;
// 	var companyName = "";
// 	var removedBoxes = [];
// 	for(i = 0; i < boxes.length; i++) {
// 		box = boxes[i];
// 		anchorTag = box.querySelector("a.itemStore");
// 		if (anchorTag != null){
// 			companyName = anchorTag.text;
// 			if (companyName.replace(/\s+/g,"")!="Amazon") {
// 				removedBoxes.push(boxes[i]);
// 			}
// 		}else{
// 			removedBoxes.push(boxes[i]);
// 		}
// 	}
// 	return removedBoxes;
// }
//
// function changeBoxesVisibility(boxes){
// 	if(boxes[0].style.visibility == "hidden"){
// 		for(i = 0; i < boxes.length; i++){
// 			boxes[i].style.visibility = "initial";
// 			boxes[i].style.display = "initial";
// 		}
// 	}else{
// 		for(i = 0; i < boxes.length; i++){
// 			boxes[i].style.visibility = "hidden";
// 			boxes[i].style.display = "none";
// 		}
// 	}
// }
//
// var allBoxes = findAllBoxes();
// var nonAmazonBoxes = findAllNonAmazon(allBoxes);
//
// changeBoxesVisibility(nonAmazonBoxes);

findVideoPosts();
addButtons();