module.exports = () => {
  const data = {
    products: [],
  };

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i,
      name: "Product " + i,
      price: Math.floor(Math.random() * 100),
    });
  }

  return data;
};
