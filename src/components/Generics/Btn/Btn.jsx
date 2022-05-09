import React from 'react'
import s from './Btn.scss'

const Btn = ({
 onClick, text, disabledbtn, customClass, id,
}) => {
	if (!text || !onClick) return null
	return (
		<span
			onClick={(e) => {
				if (!disabledbtn) return onClick(e)
				return null
			}}
			id={id}
			data-test={id}
			key={id}
			aria-hidden="true"
			className={`${!disabledbtn ? '' : s.btnoff} ${customClass || s.btnstyle}`.trim()}
		>
			{text}
		</span>
	)
}

export default Btn
