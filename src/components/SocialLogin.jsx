import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="w-full flex flex-col space-y-2">
                <button className="btn">
                    <FaGoogle></FaGoogle>Login with Google
                </button>
                <button className="btn">
                    <FaGithub></FaGithub>Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;