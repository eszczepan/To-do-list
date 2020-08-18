import React from 'react';
import dragIcon from 'assets/icons/dragIcon.svg';
import removeIcon from 'assets/icons/remove.svg';
import toDoIcon from 'assets/icons/list.svg';
import inProgressIcon from 'assets/icons/timer.svg';
import doneIcon from 'assets/icons/tick.svg';
import deleteIcon from 'assets/icons/remove-button.svg';
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
export const Delete = () => <Icon icon={deleteIcon} />;
