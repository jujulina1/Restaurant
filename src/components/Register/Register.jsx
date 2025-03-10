export default function Register() {
    return (
        <section id="register">

        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>

        <form action="">
            <h3>Register Form</h3>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <label htmlFor="re-password">Re-Password</label>
            <input type="password" placeholder="Password" id="re-password" />

            <button>Register</button>
            <div className="social">
                <div className="go"><i className="fab fa-google"></i>  Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>


    </section>
    )
}