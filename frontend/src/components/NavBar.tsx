import Button from "./Button";
import image from "../assets/rise-high-resolution-logo-transparent.png"
const NavBar = () => {
  return (
    <div className="w-full bg-white flex justify-between shadow-md">
      <a href="">
        <img className="h-10 m-3 " src={image} alt="" />
      </a>
      <div>
        <Button color="blue-600">Log In</Button>
        <Button color="blue-600" border = {true} >Sign Up</Button>
      </div>
    </div>
  );
};

export default NavBar;
