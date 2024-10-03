export const judge = async (value,problemID,unique,program,compiler) => {
    console.log("user:",value);
    
   
    const data = {
        compiler: compiler,  
        code: value,
        questionId: problemID,
        unique: unique,
        program:program
    }
    try{
        const res = await fetch("https://algo-ace-backend.vercel.app/api/execute", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if(res.status === 401){
            window.location.href = "/auth";
          }
        return res.json();
    }catch(err){
        console.error("Something went wrong")

    }
   
}