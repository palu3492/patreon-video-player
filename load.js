

var posts = [];


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
        post.id = 'p'+i.toString();
		post.insertAdjacentHTML('afterbegin', '<div class="popout-button" onclick="buttonPressed(this)" id="b'+i.toString()+'"></div>');
    }
}

function buttonPressed(button){
	var id = button.id;
	var post = $('#p'+id[1]);
	// if video not loaded yet then click play to load it
    $(post).find('button').click();
    var iframe1 = $(post).find('iframe')[0];
    var src = iframe1.src.split('&')[0];
    // $("body").insertAdjacentHTML('afterbegin', html);
    chrome.extension.sendRequest({cmd: "read_file"}, function(html){
        // $("body").html(html);
        console.log('html:');
        console.log(html);
    });
    // put src in my iframe
    // load in html
    // $(post).find('button').click();
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