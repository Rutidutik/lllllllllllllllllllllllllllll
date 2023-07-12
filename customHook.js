import React, { useEffect } from "react";
const UpdatedComponent = (OriginalComponent) => {

    function NewComponent() {

       useEffect(()=>{
           alert("in custom HOOK")
       },[])

        return <OriginalComponent name ="react"/>;
    }
    return NewComponent;
};
export default UpdatedComponent;