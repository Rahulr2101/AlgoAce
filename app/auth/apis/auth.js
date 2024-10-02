export const login = async ( email,password) => {
  try {
  
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      credentials: 'include' ,
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  } catch (err) {
    console.error(err);
  }
};
export const register = async (name, password, email) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      credentials: 'include' ,
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ name, email, password }),
    });
    return response.json();
  } catch (err) {
    console.error(err);
  }
};