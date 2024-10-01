const storeProduct = async (url, token, userData) => {
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
      return {message: "product:", result: result};

    } else {
      const error = await response.json();
      return {message: "Error registering products:"};
    }
  } catch (err) {
    return {message: "Connection error"};
  }
};

storeProduct();
