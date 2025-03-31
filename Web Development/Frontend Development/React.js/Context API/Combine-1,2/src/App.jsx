import { useEffect, useState } from "react";
import { UserContextProvider } from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Btn from "./components/Btn";
import CardUI from "./components/CardUI";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {

  const [user, setUser] = useState("");
  const [themeMode, setThemeMode]=useState("light");

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}} >
    <UserContextProvider value={{ user, setUser }}>
      <Login />
      <Profile />

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"><Btn/></div>

          <div className="w-full max-w-sm mx-auto"><CardUI/></div>
        </div>
      </div>
    </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
