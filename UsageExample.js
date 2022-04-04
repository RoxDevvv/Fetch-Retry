import { fetchRetry } from "./FetchRetry";

     async function UsageExample(Data) {
        const res = await fetchRetry(
            "https://website/test.php", // your website you are trying to fetch 
            {
                method: "POST",
                body: JSON.stringify({Data}),
            }
        );
        const json = await res.json();
        return json;
    }

var test = await UsageExample({});
console.log(test); // our reponse
console.log("hello world"); // this line should fire only if we get data
