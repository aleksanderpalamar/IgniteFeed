import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";


export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
