import styled from "@emotion/styled"

export const ProfileElementCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const ProfileImgCss = styled.img`
  width: 100px;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;

  border-radius: 50%;

  transition: box-shadow 250ms ${({ theme }) => theme.utils.cubicB};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.utils.shadow};
  }
`;

export const ProfileNameCss = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;

  font-size: ${({ theme }) => theme.spacing(5)}px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.05em;

  color: ${({ theme }) => theme.colors.lightBlack};

  transition: color 250ms ${({ theme }) => theme.utils.cubicB};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const ProfileInfoCss = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;

  transition: color 250ms ${({ theme }) => theme.utils.cubicB};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }
`;