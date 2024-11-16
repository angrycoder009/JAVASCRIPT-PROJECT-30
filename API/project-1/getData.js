export async function getData() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const json = await res.json();
        return json;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}