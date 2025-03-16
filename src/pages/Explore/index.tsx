import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Bottombar from "../../components/Bottombar";
import Navbar from "./components/navbar";
import User from "../Home/components/Recommend/user";
import { useAppSelector } from "../../redux/hooks";
const Explore: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
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
          <div className="w-full lg:w-[500px] overflow-y-auto lg:my-8">
            <p className="font-bold text-[11px]">建議</p>
            {friends.map((item) => {
              const { id, account, image, name, flag } = item;
              return (
                <User
                  id={id}
                  account={account}
                  image={image}
                  name={name}
                  flag={flag}
                  showFollow
                />
              );
            })}
          </div>
        </div>
      </Container>
      <div className="block  lg:hidden w-full fixed bottom-0  z-50">
        <Bottombar />
      </div>
    </>
  );
};

export default Explore;
