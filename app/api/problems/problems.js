export const getQuestion = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/problem/get/66dab561b8830c08057a2675"
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
