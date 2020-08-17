import styled from 'styled-components';

const ButtonIcon = styled.div`
  background-image: url(${({ icon }) => icon});
  background-size: 1.2rem;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
`;

export default ButtonIcon;
