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
