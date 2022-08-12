import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "context/theme-context";
// import { AuthProvider } from "context/auth-context";
// import { VideosProvider } from "context/videos-context";
// import { OpenVideosProvider } from "context/open-videos-context";
// import { CategoriesProvider } from "context/categories-context";
// import { QuizzesProvider } from "context/quizzes-context";
// import { UserProvider } from "context/user-context";

// Call make Server

makeServer();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* <AuthProvider> */}
          {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
              {/* <QuizzesProvider> */}
                {/* <VideosProvider> */}
                  {/* <OpenVideosProvider> */}
                    <App />
                  {/* </OpenVideosProvider> */}
                {/* </VideosProvider> */}
              {/* </QuizzesProvider> */}
            {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        {/* </AuthProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
