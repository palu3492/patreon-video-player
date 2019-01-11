
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
//
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

console.log('hello');

