export const login = async ( email,password) => {
  try {
  
    const response = await fetch("https://algo-ace-backend.vercel.app/api/auth/login", {
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
    const response = await fetch("https://algo-ace-backend.vercel.app/api/auth/register", {
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