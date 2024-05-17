import React from 'react';
import Header from './components/header/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {
	return (
		<div>
			<Header>
				<nav>
					<ul className="grid grid-flow-col gap-10 justify-center w-full">
						<li><Link to="/about">About</Link></li> 
						<li><Link to="/sale">Sale</Link></li>   
					
		
						<li>
							<Link to="/cart">
								<FontAwesomeIcon icon={faCartShopping} /> ShoppingCart
							</Link>
						</li>
					</ul>
				</nav>
			</Header>
		
			<div className="flex justify-center m-4">
				{children}
			</div>
		</div>
	);
}
