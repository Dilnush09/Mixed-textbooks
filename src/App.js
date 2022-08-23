import React, { useState } from "react";
import PostMethod2 from "./Method/POST/PostMethod2";
import Postjs from "./Post/Post";
function App() {
  const [person, setperson] = useState([
    { id: 1, name: "Jamshid", age: 23 },
    { id: 2, name: "SHaxzod", age: 13 },
    { id: 3, name: "Begzod", age: 26 },
    { id: 4, name: "Miraziz", age: 33 },
    { id: 5, name: "Komil", age: 17 },
    { id: 6, name: "Bekmurod", age: 91 }
  ]);
  const [tecno, setTecno] = useState([
    { id: 1, name: "Kompyuter", age: 100 },
    { id: 2, name: "Phone", age: 1300 },
    { id: 3, name: "Kamera", age: 2600 },
    { id: 4, name: "Car", age: 3000 },
    { id: 5, name: "Microphone", age: 1700 },
    { id: 6, name: "Audio", age: 50 }
  ]);
  return (
    <>
      <Postjs />
    </>
  );
}
export default App;
