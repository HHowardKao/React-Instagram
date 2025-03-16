import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Bottombar from "../../components/Bottombar";
import Navbar from "./components/navbar";
import People from "./components/people";
const Explore: React.FC = () => {
  //   return (
  //     <>
  //       <div className="block lg:hidden w-full fixed top-0  z-50">
  //         <Navbar />
  //       </div>

  //       <Container className=" pb-[35px]  pt-[56px] lg:pb-0 lg:pt-0">
  //         <div className="flex  lg:justify-center">
  //           <div className=" hidden lg:block lg:w-[262px] sticky top-0 h-screen">
  //             <Sidebar />
  //           </div>
  //           {/* <div className="w-full lg:w-[500px] overflow-y-auto">
  //             <People />
  //           </div> */}
  //           {/* <div className="w-full lg:block lg:w-[762px] sticky top-0 h-screen mt-10">
  //             <People />
  //           </div> */}
  //           <div className="w-full lg:w-[762px] flex justify-center mt-10">
  //             <div className="w-full max-w-[500px] h-[calc(100vh-80px)] overflow-y-auto">
  //               <People />
  //             </div>
  //           </div>
  //         </div>
  //       </Container>
  //       <div className="block  lg:hidden w-full fixed bottom-0  z-50">
  //         <Bottombar />
  //       </div>
  //     </>
  //   );
  return (
    <>
      {/* 全頁固定，高度限制、禁止頁面滾動 */}
      <div className="h-screen overflow-hidden flex flex-col">
        {/* 手機 Navbar */}
        <div className="block lg:hidden w-full fixed top-0 z-50">
          <Navbar />
        </div>

        {/* Container 包裹整體內容 */}
        <Container className="flex flex-1 pt-[56px] lg:pt-0">
          {/* 左側 Sidebar 在 Container 內，高度固定 */}
          <div className="hidden lg:block sticky top-0 h-screen w-[262px]">
            <Sidebar />
          </div>

          {/* 右側主內容滾動 */}
          <div className="w-full lg:w-[762px] flex justify-center mt-10">
            <div className="w-full  h-[calc(100vh-80px)] overflow-y-auto">
              <People />
            </div>
          </div>
        </Container>

        {/* 手機底部 Bottombar */}
        <div className="block lg:hidden w-full fixed bottom-0 z-50">
          <Bottombar />
        </div>
      </div>
    </>
  );
};

export default Explore;
