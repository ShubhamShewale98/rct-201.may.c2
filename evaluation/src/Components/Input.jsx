
export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
  value,
  visible
}) => {
 
  console.log(visible)
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
    
      <input className={`input`} value={value} onChange={(e)=>{onChange(e)}} type = {visible ? type : "password"} size={size}    />
      <img src= {rightLogo} alt=""  style={{width:"15px" , height:"15px" }}   onClick={()=>{
    rightLogoOnClick()
   }}/>
    </div>
  );
};
