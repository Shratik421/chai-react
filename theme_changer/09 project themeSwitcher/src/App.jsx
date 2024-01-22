import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {

  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = ( ) =>{
    setThemeMode("light");
  }

  const darkTheme = ( ) =>{
    setThemeMode("dark");
  }

  //actul chnage in theme

  useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
  },[themeMode])



  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* theme buttonn */}
                <Themebtn />
              </div>

              <div className="w-full max-w-sm mx-auto">{/* cards  */}
              <Card />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
