const deleteProduct = async (token, url, id) => {
  const url = `${url}/${id}`; // URL da sua API REST

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
    });

    if (response.ok) {
      const {_id} = await response.json()
      return {message: `Product with ID ${_id} successfully deleted.`,result}
    } else {
      const error = await response.json();
      return {message: "Error deleting Product:"};
    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
deleteProduct();
