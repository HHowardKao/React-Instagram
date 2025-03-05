import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Story from "./components/Story/Story";
import Post from "./components/Post/post";
import Recommend from "./components/Recommend/recommend";
import Bottombar from "../../components/Bottombar";

const Home: React.FC = () => {
  return (
    <>
      <div className="block lg:hidden w-full fixed top-0  z-50">
        <Navbar />
      </div>

      <Container className=" pb-[35px]  pt-[56px] lg:pb-0 lg:pt-0">
        <div className="flex  lg:justify-center">
          <div className=" hidden lg:block lg:w-[262px] sticky top-0 h-screen">
            <Sidebar />
          </div>
          <div className="w-full lg:w-[500px] overflow-y-auto">
            <Story />
            <Post />
          </div>
          <div className="hidden lg:block lg:w-[262px] sticky top-0 h-screen">
            <Recommend />
          </div>
        </div>
      </Container>
      <div className="block  lg:hidden w-full fixed bottom-0  z-50">
        <Bottombar />
      </div>
    </>
  );
};

export default Home;
