import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
  id: number;
  account: string;
  image: string;
  name: string;
  flag: boolean;
};

type friendState = {
  friends: Friend[];
};

const initialState: friendState = {
  friends: [
    {
      id: 1,
      account: "dahhyunnee",
      image: "./images/avatar/Dahyun.jpg",
      name: "다현 (DAHYUN)",
      flag: false,
    },
    {
      id: 2,
      account: "m.by__sana",
      image: "./images/avatar/Sana.jpg",
      name: "사나 𝚂𝚊𝚗𝚊",
      flag: false,
    },
    {
      id: 3,
      account: "momo",
      image: "./images/avatar/Momo.jpg",
      name: "모모 (MOMO)",
      flag: false,
    },
    {
      id: 4,
      account: "thinkaboutzu",
      image: "./images/avatar/Tzuyu.jpg",
      name: "쯔위 (TZUYU)",
      flag: false,
    },
    {
      id: 5,
      account: "nayeonyny",
      image: "./images/avatar/Nayeon.jpg",
      name: "나연 (NAYEON)",
      flag: false,
    },
    {
      id: 6,
      account: "jy_piece",
      image: "./images/avatar/Jeongyeon.jpg",
      name: "정연 (JEONGYEON)",
      flag: false,
    },
    {
      id: 7,
      account: "mina_sr_my",
      image: "./images/avatar/Mina.png",
      name: "미나 (MINA)",
      flag: false,
    },
    {
      id: 8,
      account: "_zyozyo",
      image: "./images/avatar/JIHYO.png",
      name: "JIHYO",
      flag: false,
    },
    {
      id: 9,
      account: "chaeyo.0",
      image: "./images/avatar/CHAEYOUNG.jpg",
      name: "채영 CHAEYOUNG",
      flag: false,
    },
    {
      id: 10,
      account: "Patrick",
      image: "./images/avatar/Patrick.png",
      name: "派大星",
      flag: false,
    },
    {
      id: 11,
      account: "Mr. Krabs",
      image: "./images/avatar/Krabs.jpg",
      name: "蟹老闆",
      flag: false,
    },
    {
      id: 12,
      account: "Squidward_Tentacles",
      image: "./images/avatar/Squidward.jpg",
      name: "章魚哥",
      flag: false,
    },
    {
      id: 13,
      account: "Sandy",
      image: "./images/avatar/Sandy.jpg",
      name: "珊迪",
      flag: false,
    },
    {
      id: 14,
      account: "Gary_the_Snail",
      image: "./images/avatar/Snail.jpg",
      name: "小蝸",
      flag: false,
    },
    {
      id: 15,
      account: "Puff",
      image: "./images/avatar/Puff.jpg",
      name: "泡芙阿姨",
      flag: false,
    },
    {
      id: 16,
      account: "Plankton",
      image: "./images/avatar/Plankton.jpeg",
      name: "皮老闆",
      flag: false,
    },
    {
      id: 17,
      account: "Mermaid_Man",
      image: "./images/avatar/Mermaid.jpg",
      name: "海超人",
      flag: false,
    },
    {
      id: 18,
      account: "Flying_Dutchman",
      image: "./images/avatar/Dutchman.jpg",
      name: "飛行荷蘭人",
      flag: false,
    },
    {
      id: 19,
      account: "Ray",
      image: "./images/avatar/Ray.jpg",
      name: "魔魟",
      flag: false,
    },
    {
      id: 20,
      account: "King_Neptune",
      image: "./images/avatar/King.jpeg",
      name: "海神王",
      flag: false,
    },
  ],
};

export const friendSlice = createSlice({
  name: "friendsList",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.flag = true;
        }
      }
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.flag = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;
