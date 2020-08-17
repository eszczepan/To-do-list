import React from 'react';
import dragIcon from 'assets/dragIcon.svg';
import removeIcon from 'assets/remove.svg';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

export const Drag = () => <ButtonIcon icon={dragIcon} />;
export const Remove = () => <ButtonIcon icon={removeIcon} />;
