// import '.../env'
export async function fetchRecipes(filter) {
    const { query, limit } = filter;
    // const url = `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_EDAMAM_APP_ID}&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}&from=0&to=${limit}`;
    const url = `https://api.edamam.com/search?q=${query}&app_id=57fb1024&app_key=ebda334a9a0236acded057bbb88a4d4b&from=0&to=${limit}`;


    const response = await fetch(url);
    const data = await response.json();
    return data?.hits;


}
export async function fetchRecipe(id) {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=57fb1024&app_key=ebda334a9a0236acded057bbb88a4d4b`
    const response = await fetch(url)
    const data = await response.json()
    return data[0];
}
