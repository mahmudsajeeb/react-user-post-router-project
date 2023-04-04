import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Error from './component/Error';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import First from './component/First/First';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetail/FriendDetails';
import Posts from './component/Posts/Posts';
// import Post from './component/Post/Post';
import PostDetails from './component/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <First />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },

      {
        path:'friend/:friendId',
        element:<FriendDetails />,
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "posts",
        element: <Posts />,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
     {
      path:'post/:postId',
      element:<PostDetails />,
      loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      // 
     },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}>
    <Header />

    </RouterProvider>
  </React.StrictMode>,
)
