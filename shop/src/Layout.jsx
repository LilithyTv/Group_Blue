/* import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Text } from '@chakra-ui/react';
import Sidebar from './components/sidebar/Sidebar'; // Make sure the path is correct
import styles from './Layout.css';


export default function Layout({ children }) {
    return (
        <div className={styles.layoutContainer}>
            <Stack width="100%" height="112px" backgroundColor="#282c34" paddingX="2rem">
                <Text fontFamily="Font Awesome 5 Brands" lineHeight="1" fontWeight="regular" fontSize="32px" letterSpacing="-0.01em" color="#E6E1D0">
                    Belle Cakery
                </Text>
                <Stack direction="row" justify="center" spacing={4}>
                    <Link to="/about">About Us</Link>
                    <Link to="/sale">Sale</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/profile">Profile</Link>
                </Stack>
            </Stack>
            <Sidebar /> {/* Ensure Sidebar is rendered here if needed 
            <div className={styles.mainContent}>
                <main className={styles.contentArea}>
                    {children}
                </main>
            </div>
        </div>
    );
}   

*/


import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {
	return (
		<div>
			<Header>
				<nav>
					<ul className="grid grid-flow-col gap-10 justify-center w-full">
						<li><Link to="/about">About</Link></li> {/* Added link to About */}
						<li><Link to="/sale">Sale</Link></li>   {/* Added link to Sale */}
						<li><Link to="/products">Products</Link></li> {/* Added link to Products */}
						<li><Link to="/profile">Profile</Link></li>
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
