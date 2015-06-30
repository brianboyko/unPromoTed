var findTed = function() {
    var isTed = false;
    var metas = document.getElementsByTagName('meta');
    for (i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("content") == "promoted") {
            isTed = true;
        };
    };
    return isTed;
};

var killTed = function() {
    document.getElementById('image').innerHTML =
        'Promoted Content Removed by unPromotTed';
};

var runScript = function() {
    console.log("ready");
    var isTed = findTed();
    console.log(isTed);
    if (isTed || isImgur) {
        killTed();
    };
};
document.addEventListener("DOMContentLoaded", function(event) {
        var isImgur = false;
        if (window.location.href.indexOf("imgur.com") > -1) {
            isImgur = true;
        };
});