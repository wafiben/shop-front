import "../../../assets/style/burguerMenu.css"
import React,{useState} from 'react';
import burge_menu from "../../../assets/images/burge_menu.svg";
import Dropdown from "react-bootstrap/Dropdown";
import {useDispatch} from 'react-redux';
import {loGout} from "../../../redux/actions/auth";

import {useNavigate} from 'react-router-dom';

function BuregurMenu() {
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const handleLogout=() => {
		dispatch(loGout(navigate))
	}
	return (
		<Dropdown className="pp">
			<Dropdown.Toggle className="burguer-menu">
				<img src={burge_menu} alt="burger-menu" />
			</Dropdown.Toggle>
			<Dropdown.Menu className="pp" >
				<Dropdown.Item onClick={handleLogout}> Log out <i class="fa fa-sign-out" aria-hidden="true"></i>
				</Dropdown.Item>
				{/*    <Dropdown.Item >
                Delete
            </Dropdown.Item> */}
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default BuregurMenu
