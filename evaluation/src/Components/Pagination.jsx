import { useRef } from "react";

export const Pagination = ({ total, selected, onPageChange }) => {
  const buttonArr =  useRef([])
  return (<div className="pageContainer">
    {new Array(total).fill("1").map((e, i) => {

      return (
        <button key={i} ref={(element)=> {if(buttonArr.current && element){
          buttonArr.current[i] = element 
        }}} onClick={()=>{
          buttonArr.current.focus()
          selected(i)
          onPageChange(i)
        }} > {i + 1} </button> )
    })}



  </div>);
};
