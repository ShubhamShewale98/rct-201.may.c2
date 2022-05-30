export const Image = ({...props}) => {
const { src, alt, borderRadius, width, height, fit } = props
console.log(src)
  return (
    <div>
      <img src={src}  alt={alt} style ={{borderRadius:`${borderRadius}%` ,height:`${height}px`,width:`${width}px` , objectFit:`${fit}`}}  />
    </div>
  );
};
