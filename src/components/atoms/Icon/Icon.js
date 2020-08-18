import styled from 'styled-components';

const Icon = styled.div`
  background-image: url(${({ icon }) => icon});
  background-size: 1.4rem;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
  margin-bottom: 1rem;
`;

export default Icon;
