import React from "react";

export default function App() {

    const [formData, setFormData] = React.useState(
        {
        email:"",
        password : "",
        confirm : "",
        checkbox : true,
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
       setFormData((prevFormdata) => {
            return{
                ...prevFormdata,
                [name] : type === "checkbox" ? checked : value
            }
       })
    }

   function handleSubmit(event) {
        event.preventDefault();
        if (formData.password === formData.confirm){
            console.log("Signed up!")
        }
        else {
            console.log("Passwords do not match");
            alert("Passwords do not match!")
        }
        if (formData.checkbox === true){
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return(
        <div className="form__container">
            <form className="form" onSubmit={handleSubmit}>
                <input onChange={handleChange}
                className="form__email form__input"
                type="email"
                placeholder="Email address"
                name="email"
                value={formData.email}
                />
                <input onChange={handleChange}
                className="form__password form__input"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                />
                <input onChange={handleChange}
                className="form__confirm form__input"
                type="password"
                placeholder="Confirm password"
                name="confirm"
                value={formData.confirm}
                />
                <div className="form__checker">
                    <input onChange={handleChange}
                    className="form__checker-checkbox form__input"
                    id="checkbox"
                    type="checkbox"
                    name="checkbox"
                    value={formData.checkbox}
                    />
                    <label  className="form__checker-label">I want to join the newsletter</label>
                </div>
                <button className="form__button">Sign up</button>
            </form>
        </div>
    )
}
