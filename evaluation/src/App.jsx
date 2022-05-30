import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";
import Eye from "./Components/eye.svg"
function App() {
  const [value,setValue ] = useState("")
  const [visible,setVisible] = useState("false")
   const  rightLogoOnClick = ()=>{
    setVisible(!visible)
   }
 const  onChange = (e) =>{
  setValue(e.target.value)
 }
 const selected = (a)=>{
   console.log(a)
 }
 
 const onPageChange = (a)=>{
  console.log(a)
}
  return (
    <div className="container">
      <Input type="text"  size="sm"  variant="filled"  rightLogo={Eye} rightLogoOnClick={()=>rightLogoOnClick()} onChange={onChange} value={value} visible={visible} />

      <Image src= "https://avatars.githubusercontent.com/u/87892652?v=4"  alt="noImgeFound"  borderRadius="100" width="100" height="100" fit="cover"  />

      <Pagination total={20}  selected={selected} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
