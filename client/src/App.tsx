import "./App.css";
import ProductClient from "./service/product-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

export interface IAppProps {
  productController: ProductClient;
}
const App = ({ productController }: IAppProps) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Main productController={productController} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
