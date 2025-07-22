import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/about";
import CatogryPage from "./pages/CatogryPage";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import TermsConditionsPage from "./pages/TermConditionPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicytPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CatogryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/term-conditions" element={<TermsConditionsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/:subcategory" element={<ProductPage />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
