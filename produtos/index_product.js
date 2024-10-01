const indexProduct = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return {message:"Product" ,produtc: result};
    } else {
      const error = await response.json();
      return {message:"Error displaying products:"};
    }
  } catch (err) {
    return {message: "Connection error"}
  }
};

// Uso da função
indexProduct();
