const registerUser = async (token, url, name, email, senha) => {
  const userData = {
    name: name,
    email: email,
    password: senha,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const result = await response.json();
      return {message: "Usuário registrado com sucesso:", result};
    } else {
      const error = await response.json();
      return {message: "Error registering user:"};
    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
registerUser();
