export const getQuestion = async (ID) => {
  try {
    
    const res = await fetch(
      `http://localhost:3000/api/problem/get/${ID}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const questtion= await res.json();
    return questtion.data;
  } catch (err) {
    console.error(err);
  }
};

export const getAlgoQuestions = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/problem/all");
    return res.json();
  } catch (err) {
    console.error(err);
  }
};
