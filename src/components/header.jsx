// import Navbar from "./navbar";
// import money from "../assets/money.png";
// import heroBg from "../assets/hero-bg.png";

// const Header = () => {
//   return (
//     <header className="w-full h-[90vh] mx-auto flex justify-center items-center">
//       <div className="w-[50%]">
//         <h1 className="text-5xl font-bold mb-6">
//           Powerful investment & Trading{" "}
//           <img src={money} alt="Money logo" className="inline" /> Solutions.
//         </h1>

//         <p className="mb-6 tracking-widest">
//           Helping you to be financially indipendent.
//         </p>

//         <button className="text-md font-semibold tracking-wider bg-[%1a1a1d] border px-4 py-3 rounded-md">
//           Explore
//         </button>
//       </div>

//       <div className="w-[50%]">
//         <img src={heroBg} alt="hero bg" className="w-[80%]" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import Navbar from "./navbar";
import money from "../assets/money.png";
import heroBg from "../assets/hero-bg.png";

const Header = () => {
  return (
    <header className="w-full h-full mx-auto flex justify-center items-center">
      <div className="w-[50%]">
        <h1 className="font-extrabold tracking-wider text-4xl mb-6">
          Mentorsity
        </h1>

        <h2 className="text-5xl font-bold mb-6">
          Elevate Your Investments with{" "}
          <img src={money} alt="Money logo" className="inline" /> Analytics.
        </h2>

        <p className="mb-6 tracking-wider">
          Empowering you with advanced financial insights and investment
          strategies.
        </p>

        <button className="text-md font-semibold tracking-wider bg-[%1a1a1d] border px-4 py-3 rounded-md">
          Explore
        </button>
      </div>

      <div className="w-[50%]">
        <img src={heroBg} alt="hero bg" className="w-[80%]" />
      </div>
    </header>
  );
};

export default Header;
