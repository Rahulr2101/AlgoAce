export const hints = async(question)=>{
try{
const data ={
    message: question
}
const res = await fetch("https://algo-ace-backend.vercel.app/api/generate",
    {
        method:"POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
)
if(res.status === 401){
    window.location.href = "/auth";
  }
return res.json();
}catch(err){

    console.error("Something went wrong",err)
}
}