export async function getData() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        return data;  // Return the data instead of logging it
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;  // Return null or an appropriate fallback value if an error occurs
    }
}
