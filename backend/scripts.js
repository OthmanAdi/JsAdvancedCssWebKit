let votingPoll = document.querySelector(".votingPoll");
let voteUP = document.querySelector(".voteUp");
let voteDOWN = document.querySelector(".voteDown");

let theVote = 0;

updateVote();

voteUP.addEventListener("click", () => {
    theVote++;
    updateVote();
    // theVote = theVote + 1; ALT
});

voteDOWN.addEventListener("click", () => {
    theVote--;
    updateVote();
    // theVote = theVote - 1; ALT
});

function updateVote() {
    votingPoll.innerHTML = theVote;
}

function showTemplate() {
    console.log("has been clicked!");
    let template = document.querySelector("template");
    let clonedTemplateContent = template.content.cloneNode(true);
    document.querySelector(".template_body").appendChild(clonedTemplateContent);
    template.innerHTML = "";
}