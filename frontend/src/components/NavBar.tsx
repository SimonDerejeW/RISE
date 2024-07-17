import Button from "./Button";

const NavBar = () => {
  return (
    <div className="w-full bg-white flex justify-between">
      <a href="">
        <img className="h-4" src="../assets/rise-high-resolution-logo-transparent.png" alt="" />
      </a>
      <div>
        <Button color="blue-500">Log In</Button>
        <Button color="blue-500" border = {true} >Sign Up</Button>
      </div>
    </div>
  );
};

export default NavBar;
