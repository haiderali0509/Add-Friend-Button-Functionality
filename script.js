let accept = document.querySelector(".accept");
let decline = document.querySelector(".decline");
let accepttext = document.querySelector(".accptxt");
let declinetext = document.querySelector(".dectxt");
let requestdet = document.querySelector(".request-detail");
var isstatus = 0;
accepttext.addEventListener("click", () => {
    if (isstatus==0) {
        accepttext.innerHTML = "Send Message"
        isstatus = 1;
        decline.style.display = "none";
        requestdet.innerHTML="You Are Now Friends"

    } else {
        accepttext.innerHTML = "Accept"
        isstatus = 0;
        decline.style.display="block";
    }
})
declinetext.addEventListener("click", () => {
    if (isstatus==0) {
        declinetext.innerHTML = "Request Declined"
        isstatus = 1;
        accepttext.style.display = "none";
        accept.style.padding = "0";
        requestdet.innerHTML = "Your Request Declined";
        decline.style.borderBottom = "none";

    } else {
        declinetext.innerHTML = "Decline"
        isstatus = 0;
        accepttext.style.display = "block";
        decline.style.borderBottom = "1px solid #c7c7c7";
        accept.style.padding = "1rem";
    }
})