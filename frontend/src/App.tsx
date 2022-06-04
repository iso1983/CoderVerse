import "./App.css";
import styled from "styled-components";
import { Canvas,useFrame } from "@react-three/fiber";
//Suspense is used for fallback in case of page is not rendererd so whatever we put inside of it will be shown if page is not rendered
import Header from "./components/header/header.component";
import About from "./pages/about/about.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  margin:0;
`;

function App() {

  return (

    //   Notice how i seperated the regular HTML elements from the Canvas ,anything related to Three.js must be in Canvas only 
        <CanvasContainer>
          <BrowserRouter>
          {/* <Header/> */}
            <Routes>  
              <Route  path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>} />
            </Routes>
          </BrowserRouter>
        
      </CanvasContainer>

  );
}

export default App;
