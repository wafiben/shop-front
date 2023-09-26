import React from 'react';
import "../../assets/style/login.css";
import {Modal} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
function BannModalUser({show,handleClose}) {
	const navigate=useNavigate()
	return (
		<Modal show={show} onHide={handleClose}>
			<div className='text-center'>
				<div >
					<h2 className="msg"> oops security</h2>
					<p className="msgalert">You Are blocked processes go to the client service</p>
					<form>
						<div className="text-center">
							<button className="btn-hover color-2" onClick={() => navigate('/contact')}>CONTACT US</button>
						</div>
					</form>
				</div>
			</div>
		</Modal>
	)
}

export default BannModalUser


