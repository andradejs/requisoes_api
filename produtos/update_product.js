const updateProduct = async (
  token,
  url,
  id,
  { name, description, ingredients, allergens, price, portion }
) => {
  const urlAPI = `${url}/${id}`;

  const userData = {
    name,
    description,
    ingredients,
    allergens,
    price,
    portion,
  };

  try {
    const response = await fetch(urlAPI, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      return {message: "Usuário atualizado com sucesso:",result: updatedUser};
    } else {
      const error = await response.json();
      return {message: "Error updating product"};
    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
updateProduct();
