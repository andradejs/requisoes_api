const login = async (email, url, senha) => {
  const userData = {
    email: email,
    password: senha,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const result = await response.json();
      return {message: '',result}

    } else {
      const error = await response.json();
      return {message: "Error issuing token:"};

    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
login();
