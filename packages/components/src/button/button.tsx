import React, { FunctionComponent, Children } from 'react';
// import { Props } from './props';
import './button.scss';

export const Button: FunctionComponent = (props) => {
  return (
    <button className="button">{props.children}</button>
  );
};

export default Button;
