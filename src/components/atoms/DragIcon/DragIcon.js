import styled from 'styled-components';
import dragIcon from 'assets/dragIcon.svg';

const DragIcon = styled.div`
  background-image: url(${dragIcon});
  background-size: 1.2rem;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export default DragIcon;
