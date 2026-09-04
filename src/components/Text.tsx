interface TextProps{
text:string;
}


const Text = ({text}:TextProps) => {
  return (
    <div>
    <h1 className="text-[#333333] font-extrabold text-3xl">{text}</h1>
    </div>
  )
}

export default Text