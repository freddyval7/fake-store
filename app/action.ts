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

export async function getCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();

  return categories;
}

export async function getProductsByCategory(category: string) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const products = await response.json();

  return products;
}

export async function getProductById(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return product;
}
