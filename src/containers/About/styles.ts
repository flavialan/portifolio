import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    margin-top: 8px;
    margin-bottom: 32px;
  }

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: 190px;
    }
  }
`
