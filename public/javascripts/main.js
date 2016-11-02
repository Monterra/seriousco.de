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