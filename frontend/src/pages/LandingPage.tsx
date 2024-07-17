import NavBar from "../components/NavBar";
import image from "../images/bennett-tobias-tqwOJAvUIh4-unsplash.jpg"
const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <div>
            <div>
              <div className="bg-blue-600 rounded-lg">
                <p className="font-bold text-6xl text-white">
                  Connecting Refugees, Building Communities    
                </p>
              </div>
            </div>
            <div className="rounded-lg ">
                <img src={image} alt="" />
            </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
