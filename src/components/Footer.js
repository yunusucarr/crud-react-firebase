import React from "react";
import { BrowserRouter } from "react-router-dom";

function Footer() {
	return (
		<footer className="text-center text-lg-start" style={{ backgroundColor: '#222' }}>
			<div className="text-center p-3 hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#9d9d9d', fontSize: '12px' }}>
				© 2022 Tüm Hakları Saklıdır
			</div>
		</footer>
	)
}

export default Footer;