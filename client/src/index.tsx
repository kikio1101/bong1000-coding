import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import ProductClient from "./service/product-client";

const httpClient = axios.create({
  baseURL: "http://localhost:8000/",
});

const productController = new ProductClient(httpClient);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App productController={productController} />);
