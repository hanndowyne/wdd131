const products = [
  { id: "p1", name: "Laptop Pro X" },
  { id: "p2", name: "Smartphone Galaxy" },
  { id: "p3", name: "Wireless Headphones" },
  { id: "p4", name: "Anime Poster Pack" },
  { id: "p5", name: "Gaming Mouse" }
];


const productSelect = document.querySelector("#productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});