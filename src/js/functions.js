import { fetchSummary } from "./api/request-summarize-page.js";

export async function getCurrentUrl() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: "getTabUrl" }, function (response) {
            if (chrome.runtime.lastError) {
                return reject(new Error(chrome.runtime.lastError));
            }
            resolve(response.url);
        });
    });
}

export async function summaryPage() {
    const sentences = document.getElementById("sentences").value;
    const currentUrl = await getCurrentUrl();

    const path = `?sentences=${sentences}&url=${currentUrl}`
    const data = await fetchSummary(path);
    
    return data;
}

export async function summaryDoc() {
    const sentences = document.getElementById("sentences").value;
    const file = document.getElementById("file").value ;
    
    const path = `?sentences=${sentences}&doc=${file}` // O exemplo pelo rapidApi fala para fazer a request assim, porém não é possivel passar arquivos via get por query params
    const data = await fetchSummary(path);

    return data;
}