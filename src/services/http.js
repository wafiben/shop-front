export async function handleRequest(url, method, data) {
    const option = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    };
  
    const response = await fetch(url, option);
    const responseData = await response.json();
    return responseData;
  }
  