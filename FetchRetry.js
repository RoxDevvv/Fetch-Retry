async function fetchRetry(url, fetchOptions = {}) {
    function onError(err) {
        return AvoidManyRequests(5000).then(() => {
            console.log("Retrying...");
            fetchRetry(url, fetchOptions);
        });
    }
    return await fetch(url, fetchOptions).catch(onError);
}
const AvoidManyRequests = (sleepTime = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, sleepTime));
}
exports.fetchRetry = fetchRetry;
