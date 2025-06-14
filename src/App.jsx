import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aplication from "./CommonComponent/Aplication";
import HomePage from "./Pages/HomePage";
import NoticePage from "./Pages/NoticePage";
import ResultPages from "./Pages/ResultPages";

import StudentsPages from "./Pages/StudentsPages";
import AboutCollege from "./Pages/AboutCollege";
import GuardianPage from "./Pages/GuardianPage";
import PicturePage from "./Pages/PicturePage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aplication />}>
          <Route index element={<HomePage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/result" element={<ResultPages />} />
          <Route path="/student" element={<StudentsPages />} />
          <Route path="/aboutcollege" element={<AboutCollege />} />
          <Route path="/guardian" element={<GuardianPage />} />
          <Route path="/pictures" element={<PicturePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
