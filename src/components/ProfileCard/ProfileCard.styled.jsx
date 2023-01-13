import styled from "@emotion/styled";

export const ProfileCardCss = styled.section`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing(5)}px;
  box-shadow: ${({ theme }) => theme.utils.shadow};
  border-radius: ${({ theme }) => theme.spacing(4)}px;
  background-color: ${({ theme }) => theme.colors.white};

  transition: box-shadow 250ms ${({ theme }) =>
    theme.utils.cubicB}, border 250ms ${({ theme }) => theme.utils.cubicB};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.colors.azure} 0px 5px 15px;
    border: none;
  }
`;

export const ProfileListCss = styled.ul`
display: flex;

`

export const ProfileLiCss = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.spacing(25)}px;
  padding: ${({ theme }) => theme.spacing(3)}px 0;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  transition: color 250ms ${({ theme }) => theme.utils.cubicB},
    border 250ms ${({ theme }) => theme.utils.cubicB},
    background-color 250ms ${({ theme }) => theme.utils.cubicB};

  &:first-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.spacing(4)}px;
  }
  &:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.spacing(4)}px;
  }

  &:not(:first-of-type) {
    border-left: none;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightBlack};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProfileQuantityCss = styled.span`
  font-size: ${({ theme }) => theme.spacing(4)}px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.05em;

  color: currentColor;

  transition color 250ms ${({ theme }) => theme.utils.cubicB};
`;