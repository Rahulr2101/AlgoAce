export const fetchUserData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/details", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if(res.status === 401){
        window.location.href = "/auth";
      }
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return await res.json();
    } catch (e) {
      console.error(e);
      return {}; // Return an empty object in case of error
    }
  };

  // Get the user data