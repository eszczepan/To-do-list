import React from 'react';
import dragIcon from 'assets/dragIcon.svg';
import removeIcon from 'assets/remove.svg';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

export const Drag = () => <Icon icon={dragIcon} />;
export const Remove = () => <Icon icon={removeIcon} />;
