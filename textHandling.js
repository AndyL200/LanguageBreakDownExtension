let button = document.getElementById('but');
let txt = document.getElementById('input-t-area');
let output = document.getElementById('outputParagraph')
let breakdown = document.getElementById('breakdownParagraph')
const populateOutput = (json) => {
    const content = json.content;
    const bd = json.breakdown
    output.innerText = content
    breakdown.innerText = bd
}

button.addEventListener("click", (e)=>{
    fetch("nodejsserver", {
        method: "POST",
        body: JSON.stringify({
            copied: txt.textContext,
            completed: false
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(json => populateOutput(json))});
