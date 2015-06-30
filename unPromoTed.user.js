// unPromoTed.user.js



console.log("loading");

var findTed = function() {
    var isTed = false;

    var metas = document.getElementsByTagName('meta');
    for (i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("content") == "promoted") {
            isTed = true;
        };
    };
    console.log("isTed:" + isTed)
    return isTed;
};

var killTed = function() {
    document.getElementById('image').innerHTML = 
        'Promoted Content Removed by unPromotTed.';

            console.log("killed Ted");
};

var runScript = function() {
    console.log("ready");
    var isTed = findTed();
    console.log(isTed);
    if (isTed) {
        killTed();
    };
};



if (window.location.href.indexOf("imgur.com") > -1) {
    console.log("running script");
    runScript();
};