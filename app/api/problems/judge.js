export const judge = async (value) => {
    console.log("user:",value);
    
   
    const data = {
        compiler: "python-3.9.7",  
        code: value 
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