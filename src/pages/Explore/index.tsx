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
      <Container className=" pb-[35px]  pt-[56px] lg:pb-0 lg:pt-0">
        {/* 全頁固定，不滾動 */}
        <div className="fixed inset-0 h-screen  overflow-hidden flex flex-col">
          {/* 手機版 Navbar */}
          <div className="block lg:hidden w-full fixed top-0 z-50">
            <Navbar />
          </div>

          {/* 中間內容區 */}
          <div className="flex flex-1 pt-[56px] lg:pt-0">
            {/* 左邊 Sidebar，固定不動 */}
            <div className="hidden lg:block fixed top-0 left-0 w-[262px] h-screen z-40">
              <Sidebar />
            </div>

            {/* 右側 People 區塊 */}
            <div className="w-full lg:ml-[262px] lg:w-[calc(100%-262px)] flex justify-center mt-10">
              <div className="w-full max-w-[500px] h-[calc(100vh-80px)] overflow-y-auto">
                <People />
              </div>
            </div>
          </div>

          {/* 手機版底部 Bottombar */}
          <div className="block lg:hidden w-full fixed bottom-0 z-50">
            <Bottombar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Explore;
