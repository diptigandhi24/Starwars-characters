 async function apiCall():Promise<any>{
    const result = await fetch("https://swapi.dev/api/people/");
     return await result.json();
    
    
}

export default apiCall;