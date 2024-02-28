export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return products;
}

export async function getFeaturedProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=4");
  const products = await response.json();

  return products;
}

export async function getProductById(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return product;
}
