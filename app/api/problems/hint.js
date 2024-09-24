export const hints = async(question)=>{
try{
const data ={
    message: question
}
const res = await fetch("http://localhost:3000/api/generate",
    {
        method:"POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
)
return res.json();
}catch(err){

    console.error("Something went wrong",err)
}
}