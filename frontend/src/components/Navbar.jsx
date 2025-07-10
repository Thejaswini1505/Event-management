// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <nav>
//       <div className="logo">NIV</div>
//       <div className={show ? "navLinks showmenu" : "navLinks"}>
//         <div className="links">
//           <Link to="hero" spy={true} smooth={true} duration={500}>
//             HOME
//           </Link>
//           <Link to="services" spy={true} smooth={true} duration={500}>
//             EVENT HUB
//           </Link>
//           <Link to="about" spy={true} smooth={true} duration={500}>
//             WHO WE ARE
//           </Link>
//           <Link to="contact" spy={true} smooth={true} duration={500}>
//             CONTACT
//           </Link>
//           <Link to="/customer-login">
//   <button>Customer Login</button>
// </Link>

//         </div>
//       </div>
//       <div className="hamburger" onClick={() => setShow(!show)}>
//         <GiHamburgerMenu />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">NIV</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <ScrollLink to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </ScrollLink>
          <ScrollLink to="services" spy={true} smooth={true} duration={500}>
            EVENT HUB
          </ScrollLink>
          <ScrollLink to="about" spy={true} smooth={true} duration={500}>
            WHO WE ARE
          </ScrollLink>
          {/* <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </ScrollLink> */}

          {/* <Link to="/customer-login">
            <button>LOGIN</button>
          </Link> */}
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
