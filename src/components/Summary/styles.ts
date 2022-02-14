import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.3rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.3125rem;
    color: var(--text-title);

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    margin-top: 1rem;
    font-size: 2.25rem;
    font-weight: 500;
    display: block;
  }
` 