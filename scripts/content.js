let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-item");

let aViewPosts = document.createElement ("a");

aViewPosts.setAttribute("target","_blank");
aViewPosts.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts/");
aViewPosts.classList.add("app-aware-link","global-nav__primary-link");

let network = document.createElement("a");
network.setAttribute("target","_blank");
network.setAttribute("href", "https://www.linkedin.com/mynetwork/?=");

let jobs = document.createElement("a");
jobs.setAttribute("target","_blank");
jobs.setAttribute("href", "https://www.linkedin.com/jobs/?=");

let messaging = document.createElement("a");
messaging.setAttribute("target","_blank");
messaging.setAttribute("href", "https://www.linkedin.com/messaging/thread/2-OTMwYzcwOTEtNmUxZi00ZTgyLThhNTYtMzU4NzE5MjAwMGE1XzAxMw==/");

let notifications = document.createElement("a");
notifications.setAttribute("target","_blank");
notifications.setAttribute("href","https://www.linkedin.com/notifications/?=");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let image = document.createElement("img");
image.setAttribute("src",chrome.runtime.getURL("images/save-icon.png"));
image.setAttribute("id","image_saved");

divInner.appendChild(image);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span")
spanViewPosts.classList.add("t-12", "break-words", "block", "t-black—-light", "t-normal","global-nav__primary-link-text");
spanViewPosts.innerHTML = "Saved";

aViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);


document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event){
    if(event.shiftKey && event.altKey && event.code === "KeyO"){
        aViewPosts.click();
    }
}

const speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-in";
speechRecognition.start();


speechRecognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;

    console.log(event);

    if(transcript.trim().toLowerCase().includes("open post")){
        aViewPosts.click();
    }else if(transcript.trim().toLowerCase().includes("open my network")){
        network.click();
    }else if(transcript.trim().toLowerCase().includes("open jobs")){
        jobs.click();
    }else if(transcript.trim().toLowerCase().includes("open messaging")){
        messaging.click();
    }else if(transcript.trim().toLowerCase().includes("open notifications")){
        notifications.click();
    }
}

speechRecognition.onend = () => {
    speechRecognition.start();
}