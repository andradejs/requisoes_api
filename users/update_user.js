const updateUser = async (token, url, userId, newName, newEmail, newSenha) => {
  const urlAPI = `${url}/${userId}`;

  const userData = {
    name: newName,
    email: newEmail,
    password: newSenha,
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
      return {message:"User updated successfully: ", updatedUser};
    } else {
      const error = await response.json();
      return {message: "Error updating user:"};
    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
updateUser();
