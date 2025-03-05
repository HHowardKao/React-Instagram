import User from "./user";
const Recommend: React.FC = () => {
  return (
    <div className="ml-7 mt-10  pb-4 shadow-md ">
      <User
        account="_grape.1015"
        image="./images/avatar/me.jpg"
        name="高國豪"
        flag={true}
      />
      <div className="flex justify-between">
        <p className="text-gray-700 text-[11px] pl-2">為你推薦</p>
        <p className="font-bold text-[11px] cursor-pointer mr-2">查看全部</p>
      </div>
      <User
        account="dahhyunnee"
        image="./images/avatar/Dahyun.jpg"
        name="다현 (DAHYUN)"
        flag={false}
      />
      <User
        account="m.by__sana"
        image="./images/avatar/Sana.jpg"
        name="사나 𝚂𝚊𝚗𝚊"
        flag={false}
      />
      <User
        account="thinkaboutzu"
        image="./images/avatar/Tzuyu.jpg"
        name="쯔위 (TZUYU)"
        flag={false}
      />
      <User
        account="momo"
        image="./images/avatar/Momo.jpg"
        name="모모 (MOMO)"
        flag={false}
      />
      <User
        account="nayeonyny"
        image="./images/avatar/Nayeon.jpg"
        name="나연 (NAYEON)"
        flag={false}
      />
      <div className="text-gray-400 text-[10px] pl-2 ">
        <p>關於•使用說明•新聞稿•API•工作機會•隱私</p>
        <p>使用條款•地點•語言•Meta 驗證</p>
        <br />
        <p>© 2025Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Recommend;
