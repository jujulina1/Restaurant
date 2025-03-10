import GuestNav from "../GuestNav";
import UserNav from "../UserNav";
import "../Header/Header.css"



export default function Header() {
    return (
        <header>
        {/* <!-- Navigation --> */}
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>

        <nav>
          <div>
            <a href="#">Menu</a>
            <a href="#">Search</a>
          </div>

          {/* <!-- Logged-in users --> */}
          <UserNav />
          

          {/* <!-- Guest users --> */}
          <GuestNav />
    
        </nav>
      </header>
    )
}