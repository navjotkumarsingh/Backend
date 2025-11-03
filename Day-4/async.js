async function fetchData(){
    const result = await new Promise(resolve => {
        setTimeout(() => resolve("data loaded"), 2000);
    })
    console.log(result);
}
fetchData();