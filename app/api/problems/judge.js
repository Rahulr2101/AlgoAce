export const judge = async (value,problemID,unique,program) => {
    console.log("user:",value);
    
   
    const data = {
        compiler: "python-3.9.7",  
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