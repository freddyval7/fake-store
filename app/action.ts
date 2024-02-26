export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=4");
  const products = await response.json();

  return products;
}
