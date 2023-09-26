import {backgRoundColrNavbar} from "../../styles";
import TextFiled from "../../atoms/textFiled";
import {navbarText} from "../../styles";
import "../../assets/style/navbar.css"
import {useNavigate} from "react-router-dom";
function CustomNavbar() {
	const navigate=useNavigate()
	return (
		<div style={backgRoundColrNavbar} className="navebarecustom">
			<TextFiled
				textFiled="About Us"
				className="text-uppercase text-white badge link"
				style={navbarText}
				handleClick={() => navigate('/about')}
			/>
			<TextFiled
				textFiled="Contact Us"
				className="text-uppercase text-white badge link"
				style={navbarText}
				handleClick={() => navigate('/contact')}

			/>

			<TextFiled
				textFiled="sign in"
				className="text-uppercase text-white badge link"
				style={navbarText}
				handleClick={() => navigate('/')}


			/>
		
		
	
		
		</div>






	);
}

export default CustomNavbar;
