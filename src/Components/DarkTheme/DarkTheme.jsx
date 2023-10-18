import { CiDark } from "react-icons/ci";
import { BiSun } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DarkTheme = () => {
    const {dark, setDark} = useContext(AuthContext);
  return (
    <div>
      {dark ? (
        <CiDark
          className="text-4xl font-black"
          onClick={() => setDark(!dark)}
        ></CiDark>
      ) : (
        <BiSun className="text-4xl" onClick={() => setDark(!dark)}></BiSun>
      )}

    </div>
  );
};

export default DarkTheme;
