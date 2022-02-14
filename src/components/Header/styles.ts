import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: #FFF;
    font-weight: 600;
    background: var(--blue-light);
    border: 0;
    padding: 0.75rem 2rem;
    border-radius: 0.3125rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`