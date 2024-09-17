import { baseUrl } from "./base-url.js";

export async function fetchSummary(path){

    const url = `${baseUrl}${path}`;
    let result = "";
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fd69c01475mshd7e920f5811189cp1cca0cjsn2932aed4c658',
            'x-rapidapi-host': 'meaningcloud-summarization-v1.p.rapidapi.com',
            Accept: 'application/json'
        }
    };

    try {
        await fetch(url, options)
        .then(res => res.json())
        .then(res => {     
            result = res.summary
        })
        .catch(error => console.log(error));

            
    } catch (error) {
        console.error(error);
    }

    return result;
}