

import styled from "@emotion/styled";

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  margin: 0 auto;
  width: 100% * {
    margin: 0;
    padding: 0;
  }
`;

export const ImgCss = styled.img`
diplay: block;
max-width: 100%;
height: auto;
`;
