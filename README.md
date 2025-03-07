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
