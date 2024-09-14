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
        const res = await fetch("http://localhost:3000/api/execute", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }catch(err){
        console.error("Something went wrong")

    }
}