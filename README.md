# React + TypeScript + Vite -Instagram 風格社群網站開發

## 1.Architecture Design & Explanation

### routes.tsx

主要功能是定義應用程式的路由，使用 react-router-dom 來管理不同頁面的導覽

```tsx
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chatroom",
    element: <ChatRoom />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
```

- routes 是一個陣列，包含應用程式的所有路由設定
- path: "/" → 代表首頁，對應到 Home 組件
- path: "/chatroom" → 代表聊天室頁面，對應到 ChatRoom 組件
- path: "\*" → 代表任何未匹配的路由，顯示 NotFound 組件

### Home 主頁下的 index.tsx

主要功能是定義首頁 (Home) 的結構與版面配置

#### 主頁包含的組件:

```tsx
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Story from "./components/Story/Story";
import Post from "./components/Post/post";
import Recommend from "./components/Recommend/recommend";
import Bottombar from "../../components/Bottombar";
```

- Container：用於包裝主要內容，可能用於設定頁面寬度或增加間距。
- Navbar：頂部的導航列，適用於行動裝置 (lg:hidden 指在桌機版隱藏)。
- Sidebar：左側選單，僅在桌機版 (lg:block) 顯示。
- Story：顯示限時動態 (Story) 的元件。
- Post：顯示貼文 (Post) 的元件。
- Recommend：右側推薦內容 (Recommend)，僅桌機版顯示。
- Bottombar：底部導航欄，僅行動裝置顯示 (lg:hidden)。

#### Container.tsx

主要功能是建立一個響應式的版面容器 (Container)

```tsx
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;
```

- max-width: 1024px;
  - 預設最大寬度為 1024px，適合桌機版的顯示。
- margin: 0 auto;
  - 讓 Container 水平置中，使內容對齊畫面中央。
- @media only screen and (max-width: 1024px)
  - 當螢幕寬度小於 1024px（如平板或手機），max-width 會變成 100%，適應較小的裝置。
