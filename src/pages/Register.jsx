import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        //get from data
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name, email, password});

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log({ errorCode, errorMessage });
    
  });
    };
    return (
         <div className="min-h-screen justify-center content-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
              <form onSubmit={handleSubmit} className="fieldset">

                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Name" />
                
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <p className="text-center font-semibold">
                Already Have An Account? <Link to="/auth/login" className="text-blue-600">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;