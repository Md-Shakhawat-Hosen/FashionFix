import { CiDark } from "react-icons/ci";
import { BiSun } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useEffect } from "react";


const DarkTheme = () => {
    const {dark, setDark} = useContext(AuthContext);
  
  const localData = JSON.parse(localStorage.getItem("darkTheme"));


  



   useEffect(() => {
     //  const localData = JSON.parse(localStorage.getItem("darkTheme"));
     if (localData) {
       setDark(!localData[0]);
     }
   },[]);


  

  // console.log(localData[0])
  
  const darkHandleClick = () => {
        localStorage.clear()
        const theme = [];

        const localData = JSON.parse(localStorage.getItem("darkTheme"));

        if (!localData) {
          theme.push(dark);
          localStorage.setItem("darkTheme", JSON.stringify(theme));
        } else {
          theme.push(...localData, dark);
          localStorage.setItem("darkTheme", JSON.stringify(theme));
        }


        setDark(!theme[0])

  }

  const sunHandleClick = () =>{
    localStorage.clear()
    const theme = [];

    const localData = JSON.parse(localStorage.getItem("darkTheme"));

    if (!localData) {
      theme.push(dark);
      localStorage.setItem("darkTheme", JSON.stringify(theme));
    } else {
      theme.push(...localData, dark);
      localStorage.setItem("darkTheme", JSON.stringify(theme));
    }

    setDark(!theme[0]);

  }

    
    
  return (
    <div>
      {dark ? (
        <CiDark
          className="text-4xl font-black"
          // onClick={() => setDark(!dark)}
          onClick={darkHandleClick}
        ></CiDark>
      ) : (
        <BiSun className="text-4xl"
        onClick={sunHandleClick}
        //  onClick={() => setDark(!dark)}
         ></BiSun>
      )}
    </div>
  );
};

export default DarkTheme;
