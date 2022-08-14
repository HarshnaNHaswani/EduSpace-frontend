import React from "react";
import { useRoutes } from "react-router-dom";
import { BaseLayout } from "components/BaseLayout";
import { RequiresAuth } from "components/RequiresAuth";
import { Auth } from "pages/Auth";
import { Explore } from "pages/Explore";
import { Home } from "pages/Home";
import { NotFound } from "pages/NotFound";
import { Profile } from "pages/User/Profile";
import { SingleVideo } from "pages/SingleVideo";
import { Playlists } from "pages/User/Playlists";
import { WatchLater } from "pages/User/WatchLater";
import { Login } from "pages/Auth/Login";
import { SignUp } from "pages/Auth/SignUp";
import { UpdatePassword } from "pages/Auth/UpdatePassword";
import { SinglePlaylistVideo } from "pages/User/Playlists/SinglePlaylistVideo";
import { History } from "pages/User/History";
import { LikedVideos } from "pages/User/LikedVideos";
import { FilterVideosByCategory } from "pages/FilterVideosByCategory";
import { BookMarkedQuizzes } from "pages/BookMarkedQuizzes";
import { SinglePlaylist } from "pages/User/Playlists/SinglePlaylist";

export const AppRouter = () => {
  let routes = useRoutes([
    {
      element: <BaseLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "videos/:id",
          element: <SingleVideo />,
        },
        {
          path: "channels/:id",
          element: <FilterVideosByCategory />,
        },
        {
          path: "auth",
          element: <Auth />,
          children: [
            { path: "login", element: <Login />, index: true },
            { path: "signup", element: <SignUp /> },
            { path: "update-password", element: <UpdatePassword /> },
            //   { path: "forgot-password", element: <ForgotPassword /> },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
        {
          element: <RequiresAuth />,
          children: [
            {
              path: "user",
              children: [
                {
                  path: "profile",
                  element: <Profile />,
                },
                {
                  path: "playlists",
                  children: [
                    {
                      path: ":id",
                      children: [
                        {
                          path: "videos/:videoId",
                          element: <SinglePlaylistVideo />,
                        },
                        {
                          index: true,
                          element: <SinglePlaylist />,
                        },
                      ],
                    },
                    {
                      index: true,
                      element: <Playlists />,
                    },
                  ],
                },
                {
                  path: "watch-later",
                  element: <WatchLater />,
                },
                {
                  path: "watch-history",
                  element: <History />,
                },
                {
                  path: "liked-videos",
                  element: <LikedVideos />,
                },
                {
                  path: "bookmarked-quizzes",
                  element: <BookMarkedQuizzes />,
                },
                {
                  path: "*",
                  element: <NotFound />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: "mock",
    //   element: <MockmanEs />,
    // },
  ]);
  return routes;
};
