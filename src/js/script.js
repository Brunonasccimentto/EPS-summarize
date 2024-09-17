// https://learn.meaningcloud.com/developer/summarization/1.0/doc/request
import { summaryPage } from "./functions.js";

document.getElementById("bSummary").addEventListener("click", async ()=> {
    
    const data = await summaryPage();
    document.getElementById("text").innerHTML = data; 
})
