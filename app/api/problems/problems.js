export const getQuestion = async (ID) => {
  try {
    const res = await fetch(`http://localhost:3000/api/problem/get/${ID}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const questtion = await res.json();
    return questtion.data;
  } catch (err) {
    console.error(err);
  }
};
export const getQuestionByType = async (type) => {
  try {
    const res = await fetch(`http://localhost:3000/api/problem/${type}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(res.status === 401){
      window.location.href = "/auth";
    }
    const data = await res.json();
    
    return data;
  
  } catch (err) {
    console.error("Error fetching data:", err);
    return null; 
  }
};

export const getAlgoQuestions = async () => {
  try {
    const res = await fetch("https://algo-ace-backend.vercel.app/api/problem/");
    if(res.status === 401){
      window.location.href = "/auth";
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
};
