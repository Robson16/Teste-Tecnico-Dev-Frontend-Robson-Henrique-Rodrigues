import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    margin: 0 0 1rem;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    line-height: 2rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme.colors.link};
  }
`;