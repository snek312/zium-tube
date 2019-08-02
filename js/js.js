(() => {
    document.getElementById("buttonId").addEventListener("click", setVideoSrc, false);

    const BODY = document.body.classList;

    if (docCookies.getItem("theme") == 1) {
        BODY.remove("black");
        console.log("theme DAY loaded");
    } else if (docCookies.getItem("theme") == 2) {
        BODY.add("black");
        console.log("theme NIGHT loaded");
    } else {
        console.log("cookies not working");
    }

    document.getElementById("themeButton").addEventListener("click", () => {
        if (BODY.contains("black")) {
            BODY.remove("black");
            docCookies.setItem("theme", "1", "Infinity", "/");
        } else {
            BODY.add("black");
            docCookies.setItem("theme", "2", "Infinity", "/");
        }
    });

    function setVideoSrc() {
        let youtubeInput = document.getElementById("inputText").value;
        let videoID = checkInputLink(youtubeInput);
        let iFrameSource = 'https://www.youtube.com/embed/' + videoID;

        document.getElementById("videoBox").setAttribute("src", iFrameSource);
    }

    function checkInputLink(ytInput = '') {
        switch (true) {
            case ytInput.includes("https://www.youtube.com/watch?v=") && ytInput.includes("&list"):
                return ytInput.slice(ytInput.indexOf('=') + 1, ytInput.indexOf('&'))
            case ytInput.includes("https://www.youtube.com/watch?v="):
                return ytInput.replace('https://www.youtube.com/watch?v=', '')
            case ytInput.includes('https://youtu.be/'):
                return ytInput.replace('https://youtu.be/', '')
            default:
                createAlert(ytInput)
                break
        }
    }
    function createAlert(ytInput) {
        alert(`${ytInput} is not valid youtube link`);
    }
})()