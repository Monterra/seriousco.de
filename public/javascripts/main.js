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
        link.innerHTML = '<span>' + link.innerHTML + '</span>';
        link.classList.add('external');
    }
}

(function () {
    function _calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    var birthDate = new Date(1993, 3, 6);
    var ageNodes = document.getElementsByClassName("_myage");
    for (var j = 0; j < ageNodes.length; j++) {
        ageNodes[j].innerHTML = _calculateAge(birthDate);
    }
})();