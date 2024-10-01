const registerUser = async (token, url, id) => {
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
      return {message: `User with ID ${id} successfully deleted.`};
    } else {
      const error = await response.json();
      return {message: "Error deleting user:"};
    }
  } catch (err) {
    return {message:"Connection error"}
  }
};

// Uso da função
registerUser();
