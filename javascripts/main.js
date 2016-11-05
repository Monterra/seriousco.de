var timeouts = [];
new Clipboard('.article pre', {
    text: function(trigger) {
        if (timeouts[trigger]) {
            clearTimeout(timeouts[trigger]);
        }
        timeouts[trigger] = setTimeout(function () {
            trigger.classList.remove('copied');
        }, 1000);
        trigger.classList.add('copied');

        return trigger.firstChild.innerText;
    }
});

var article = document.getElementsByClassName('article')[0];
var nodes = document.getElementsByTagName("a"), i = nodes.length;
var regExp = new RegExp("//" + location.host + "($|/)");
while(i--){
    var link = nodes[i];
    var href = link.href;
    var isLocal = (href.substring(0,4) === "http") ? regExp.test(href) : true;
    if (!isLocal) {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        link.classList.add('external');
    }
}