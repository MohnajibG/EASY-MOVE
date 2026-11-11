import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentionsLegales from "./pages/MentionsLegales";
import StatusPage from "./pages/StatusPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/en-construction" element={<StatusPage variant="construction" />} />
      <Route path="*" element={<StatusPage variant="notFound" />} />
    </Routes>
  );
};

export default App;
