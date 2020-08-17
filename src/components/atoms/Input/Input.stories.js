import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const Normal = () => <Input />;
export const Title = () => <Input title />;
export const Description = () => <Input description />;
