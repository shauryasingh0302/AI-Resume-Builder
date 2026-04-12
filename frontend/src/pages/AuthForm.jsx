import { useState } from "react";

export default function AuthForm() {

    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = useState(urlState || "login");
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
    }

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            <div className="w-full hidden md:inline-block">
                <img
                    className="h-screen w-full object-cover"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
                    alt="leftSideImage"
                />
            </div>

            <div className="w-full flex flex-col items-center justify-center px-6">
                <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-4xl text-neutral-900 font-medium">
                        {state==='signup' ? "Create account" : "Sign in"}
                    </h2>

                    <p className="text-sm text-neutral-500 mt-2">
                        {state==='signup'
                            ? "Start building ATS-ready resumes with AI"
                            : "Welcome back! Please sign in to continue"}
                    </p>

                    <button
                        type="button"
                        className="w-full mt-6 bg-neutral-100 border border-neutral-400 flex items-center justify-center h-11 rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                            alt="googleLogo"
                        />
                    </button>

                    <div className="flex items-center gap-4 w-full my-4">
                        <div className="w-full h-px bg-neutral-400"></div>
                        <p className="w-full text-nowrap text-sm text-neutral-500">
                            or {state==='signup' ? "sign up" : "sign in"} with email
                        </p>
                        <div className="w-full h-px bg-neutral-400"></div>
                    </div>

                    {state==='signup' && (
                        <div className="flex items-center w-full border border-neutral-400 h-11 rounded-full overflow-hidden pl-6 gap-3 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-neutral-600 shrink-0"
                            >
                                <path d="M20 21a8 8 0 0 0-16 0" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>

                            <input
                                type="text"
                                placeholder="Full name"
                                className="bg-transparent text-neutral-700 placeholder-neutral-500 outline-none text-sm w-full h-full"
                                required
                            />
                        </div>
                    )}

                    <div className="flex items-center w-full border border-neutral-400 h-11 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                                fill="#404040"
                            />
                        </svg>
                        <input
                            type="email"
                            placeholder="Email id"
                            className="bg-transparent text-neutral-700 placeholder-neutral-500 outline-none text-sm w-full h-full"
                            required
                        />
                    </div>

                    <div className="flex items-center mt-4 w-full border border-neutral-400 h-11 rounded-full overflow-hidden pl-6 pr-4 gap-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path
                                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                                fill="#404040"
                            />
                        </svg>

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="bg-transparent text-neutral-700 placeholder-neutral-500 outline-none text-sm w-full h-full"
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-neutral-600 hover:text-black transition"
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-.722-3.25" />
                                    <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                                    <path d="m20 15-1.726-2.05" />
                                    <path d="m4 15 1.726-2.05" />
                                    <path d="m9 18 .722-3.25" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {!state==='signup' && (
                        <div className="w-full flex items-center justify-between mt-5 text-neutral-500">
                            <div className="flex items-center gap-2">
                                <input className="h-4" type="checkbox" id="checkbox" />
                                <label className="text-sm" htmlFor="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <a className="text-sm underline" href="#">
                                Forgot password?
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="mt-6 w-full h-11 rounded-full text-white bg-neutral-900 hover:bg-black transition-colors"
                    >
                        {state==='signup' ? "Create account" : "Login"}
                    </button>

                    <p className="text-neutral-500 text-sm mt-4">
                        {state==='signup'
                            ? "Already have an account?"
                            : "Don’t have an account?"}{" "}
                        <button
                            type="button"
                            onClick={() => setState(prev => prev === 'signup' ? 'login' : 'signup')
                        }
                            className="text-neutral-900 hover:underline font-medium"
                        >
                            {state==='signup' ? "Sign in" : "Sign up"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}