
interface LoginButtonProps {
    loginURL?: string;
    loginAction?: (e: React.MouseEvent) => void;
}

export function LoginButton({ loginURL, loginAction }: LoginButtonProps) {
    if (!loginURL && !loginAction) {
        return <div style={{ width: "50px" }}></div>;
    }

    return (
        <div className="nav-user user-login mr-lg-2">
            {loginAction ? (
                <button className="btn btn-primary btn-sm" onClick={loginAction}>
                    Login
                </button>
            ) : (
                <a href={loginURL} className="user-login-link">
                    <svg className="icon feather" aria-hidden="true">
                        <use href="#user">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user"
                                id="user"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </use>
                    </svg>
                    <span className="label">Login</span>
                </a>
            )}
        </div>
    );
}

export default LoginButton;