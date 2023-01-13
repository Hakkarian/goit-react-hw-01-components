import styled from "@emotion/styled"


export const TitleCss = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  color: ${({ theme }) => theme.colors.lightBlack};

  transition: color 250ms ${({ theme }) => theme.utils.cubicB};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.random};
  }
`;
export const StatsSectionCss = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 150px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)}px;
  box-shadow: ${({ theme }) => theme.utils.shadow};

  transition: box-shadow 250ms ${({ theme }) => theme.utils.cubicB},
    border 250ms ${({ theme }) => theme.utils.cubicB};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.colors.azure} 0px 5px 15px;
  }
`;
export const StatsListCss = styled.ul`
  display: flex;
  align-items: flex-end;
`;
export const StatsLiCss = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 5);
  
  height: ${({ theme }) => theme.spacing(15)}px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  transition: background-color 250ms ${({ theme }) => theme.utils.cubicB},
    color 250ms ${({ theme }) => theme.utils.cubicB},
    box-shadow 250ms ${({ theme }) => theme.utils.cubicB};

  background-color: ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.white};

  &:first-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.spacing(4)}px;
  }
  &:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.spacing(4)}px;
  }

  :not(:first-of-type) {
    border-left: none;
  }

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.random};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.utils.shadow};
  }
`;