import Container from "../../components/Container";
import Friend from "./components/friend/friend";
import Bottombar from "../../components/Bottombar";
import Sidebar from "./components/sidebar/sidebar";
import Friends from "./components/friend/friends";
import Chatuser from "./components/chatuser/chatuser";
const ChatRoom: React.FC = () => {
  return (
    <>
      <Container className="flex">
        <div className=" hidden lg:w-[51px] lg:block border-r border-gray-300 h-screen">
          <Sidebar />
        </div>
        <div className="w-[20%] border-r border-gray-300 h-screen  items-center overflow-y-auto lg:pb-0 lg:hidden">
          <Friend />
        </div>
        <div className="hidden border-r border-gray-300 h-screen  items-center overflow-y-auto pb-[56px] lg:block lg:pb-0 lg:w-[358px] no-scrollbar">
          <Friends />

          <Chatuser />
        </div>
        <div className="w-[80%] flex items-center justify-center sticky top-0 h-screen lg:w-[615px]">
          <div>
            <div className="flex justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className=" rounded-full border-[2px] p-5 "
              >
                <path d="M 25 2 C 12.347656 2 2 11.597656 2 23.5 C 2 30.007813 5.132813 35.785156 10 39.71875 L 10 48.65625 L 11.46875 47.875 L 18.6875 44.125 C 20.703125 44.664063 22.800781 45 25 45 C 37.652344 45 48 35.402344 48 23.5 C 48 11.597656 37.652344 2 25 2 Z M 25 4 C 36.644531 4 46 12.757813 46 23.5 C 46 34.242188 36.644531 43 25 43 C 22.835938 43 20.742188 42.6875 18.78125 42.125 L 18.40625 42.03125 L 18.0625 42.21875 L 12 45.375 L 12 38.8125 L 11.625 38.53125 C 6.960938 34.941406 4 29.539063 4 23.5 C 4 12.757813 13.355469 4 25 4 Z M 22.71875 17.71875 L 10.6875 30.46875 L 21.5 24.40625 L 27.28125 30.59375 L 39.15625 17.71875 L 28.625 23.625 Z"></path>
              </svg>
            </div>
            <div className="flex justify-center text-center items-center pt-5 ">
              <div>
                <p className="text-[20px] ">你的訊息</p>
                <p className="text-gray-500 text-sm">
                  私下傳送相片和訊息給朋友或群組。
                </p>
                <div className="flex  justify-center">
                  <p className=" bg-blue-400  rounded-xl text-white  p-2 text-sm mt-2 w-[90px] cursor-pointer">
                    發送訊息
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="block  lg:hidden w-full fixed bottom-0  z-50">
        <Bottombar />
      </div>
    </>
  );
};

export default ChatRoom;
