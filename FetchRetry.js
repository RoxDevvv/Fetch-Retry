async function fetchRetry(url, fetchOptions = {}) {
   try {
       const results = await fetch(url, fetchOptions);
       if(!results.ok){
        throw new Error();
       }else{
        return results;
       }
   } catch (error) {
        await AvoidManyRequests(5000);
        console.log("Retrying...");
        return fetchRetry(url, fetchOptions);
   }
}
const AvoidManyRequests = (sleepTime = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, sleepTime));
}
exports.fetchRetry = fetchRetry;
