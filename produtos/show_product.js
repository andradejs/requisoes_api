const showProduct = async (url,id) => {
  const urlApi = `${url}/${id}`; // URL da sua API REST

  try {
    const response = await fetch(urlApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return {message: "Products:", result};
    } else {
      const error = await response.json();
      return {message: "Error registering product:"}
    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
showProduct();
