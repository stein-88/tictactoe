import React from 'react';
import s from './Btn.scss';

const Btn = ({
  onClick, text, disabledbtn, customClass, id,
}) => {
  if (!text || !onClick) return null;
  return (
    <span
      onClick={(e) => {
        if (!disabledbtn) return onClick(e);
        return null;
      }}
      id={id}
      aria-hidden="true"
      className={`${s.btnstyle} ${!disabledbtn ? '' : s.btnoff}` || customClass}
    >
      {text}
    </span>
  );
}

export default Btn;
