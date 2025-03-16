import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Bottombar from "../../components/Bottombar";
import Navbar from "./components/navbar";
import People from "./components/people";

const Explore: React.FC = () => {
  return (
    <>
      {/* Navbar for small screens */}
      <div className="block lg:hidden w-full fixed top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <Container className="pt-[56px] pb-[35px] lg:pt-0 lg:pb-0">
        <div className="flex h-screen">
          {/* Sidebar - Fixed on large screens */}
          <div className="hidden lg:block lg:w-[262px]">
            <div className="sticky top-0 h-screen">
              <Sidebar />
            </div>
          </div>

          {/* People - Scrollable Content */}
          <div className="w-full lg:w-[500px] overflow-y-auto">
            <div className="mt-10 lg:mt-0 px-4">
              <People />
            </div>
          </div>
        </div>
      </Container>

      {/* Bottombar for small screens */}
      <div className="block lg:hidden w-full fixed bottom-0 z-50">
        <Bottombar />
      </div>
    </>
  );
};

export default Explore;
