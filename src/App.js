import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";

const DestinationPage = lazy(() => import("./pages/Destination"));
const CrewPage = lazy(() => import("./pages/Crew"));
const TechnologyPage = lazy(() => import("./pages/Technology"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/destination"
          element={
            <Suspense>
              <DestinationPage />
            </Suspense>
          }
        />
        <Route
          path="/crew"
          element={
            <Suspense>
              <CrewPage />
            </Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <Suspense>
              <TechnologyPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
