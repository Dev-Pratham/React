import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //this one
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//in the above code we are using react-dom library
// to render the (component tree) inside the element
// with id='root';

//component tree
/* <StrictMode>
<App />
</StrictMode>, */

// what is strict mode?
// It is the built in component in react
// it doesnot has a visual representation
// purpose is to identify potential problems

//we can also render this component tree in
//a mobile app using different library called react native
//react can be used for web mobile and desktop devices..
