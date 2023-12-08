import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';



const Backdrop = ({ children, isCenter = false, className=''}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={classNames(`absolute ${className} top-0 left-0 w-full h-full z-50 bg-[#000000b2] flex justify-center ${
				isCenter ? 'items-center' : 'items-end'
			}`)}
		>
			{children}
		</motion.div>
	);
};

export default Backdrop;
