import { motion, Variants } from 'framer-motion';
import React, { MutableRefObject, ReactNode, useRef } from 'react';
import Backdrop from '../Backdrop';


const Modal = ({ children, className }) => {
	const comeIn = {
		hidden: {
			opacity: 0,
		},
		visible: {
			x: '0',
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	};

	return (
		<Backdrop isCenter={true} className={className} >
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className='bg-base100 rounded-2xl '
				variants={comeIn}
				initial='hidden'
				animate='visible'
				exit='exit'

			>
                <div className='p-7 bg-slate-800 rounded-lg max-w-[300px] md:max-w-[500px]'>
				{children}

                </div>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
