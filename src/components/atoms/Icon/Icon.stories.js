import React from 'react';
import dragIcon from 'assets/dragIcon.svg';
import removeIcon from 'assets/remove.svg';
import toDoIcon from 'assets/list.svg';
import inProgressIcon from 'assets/timer.svg';
import doneIcon from 'assets/tick.svg';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

export const Drag = () => <Icon icon={dragIcon} />;
export const Remove = () => <Icon icon={removeIcon} />;
export const ToDo = () => <Icon icon={toDoIcon} />;
export const InProgress = () => <Icon icon={inProgressIcon} />;
export const Done = () => <Icon icon={doneIcon} />;
