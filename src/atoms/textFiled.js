import React from "react";

function TextFiled({className,textFiled,style,handleClick}) {
	return (
		<p className={className} style={style} onClick={handleClick}>
			{textFiled}
		</p>
	);
}

export default TextFiled;
