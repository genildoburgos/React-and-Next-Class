import React, {useState} from "react";

const Form = ({onSubmit})=>{
    const [formData, setFormData] = useState({name:"", email: ""});

    const handleFormValue = (event)=>{
        const {name, value} = event.target;
        setFormData((prevData) => ({...formData, [name]: value}));
    }

    const handleEnviarSubmit = (event) =>{
        event.preventDefault();
        onSubmit(formData);
        console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleEnviarSubmit}>
                <label htmlFor="">name</label>
                <input type="text" name="name" value={formData.name} onChange={handleFormValue} />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleFormValue}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;