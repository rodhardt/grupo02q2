import styled from "styled-components";
export const ContainerGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const ContainerPropertyCard = styled.div`
  background-color: #0f919405;
  width: 265px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid var(--opacityBlue);
  :hover {
    cursor: pointer;
    border: 1px solid var(--darkBlue);
  }
`;
export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  p {
    font-size: 13px;
    font-weight: bold;
    color: var(--darkerGray);
    margin-bottom: 5px;
  }
`;
export const InfosCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 95%;
  align-items: flex-start;
  margin-top: 20px;
  p {
    ::first-letter {
      text-transform: uppercase;
    }
    font-size: 12px;
    font-weight: bold;
    color: var(--darkerGray);
  }
  .district,
  .address {
    width: 100%;
    color: var(--darkerGray);
    font-size: 13px;
  }
  .square {
    font-size: 7px;
  }
`;
export const InfosHouse = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 4px;
  p {
    font-size: 10px;
    font-weight: lighter;
    color: var(--darkerGray);
  }
  @media (min-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin: 10px;
    p {
      font-size: 11px;
      text-align: center;
    }
  }
`;
export const ImgHouse = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 150px;
    border-radius: 10px;

    z-index: 1;
  }
  button {
    border-radius: 70px;
    border: 1px solid #ffffff00;
    background-color: #ffffff00;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    position: absolute;
    color: #fffd0099;
    :hover {
      color: #fffd00;
      border: 1px solid #ffffff00;
    }
    z-index: 2;
  }
  .star-bookmarked {
    color: #fffd00;
  }
  .star-bookmarked:hover {
    color: #fffd0099;
  }
  button svg {
    width: 30px;
    height: 30px;
  }
`;
export const HousePrice = styled.div`
  width: 95%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin-bottom: 0;
  transform: translateY(-100%);
  p {
    font-weight: bold;
    color: var(--darkerGray);
    font-size: 14px;
    border-bottom: 1px solid #00000015;
    border-top: 1px solid #00000015;
    padding: 4px 1px;
    width: 50%;
  }
`;
export const SmallContainer = styled.div`
  background-color: var(--opacityBlue);
  width: 130px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #ffffff00;
  :hover {
    cursor: pointer;
    border: 1px solid var(--darkBlue);
  }
  p {
    font-size: 8px;
  }
  img {
    width: 90%;
    border-radius: 10px;
  }
`;
export const SmallInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;
export const SmallCardInfo = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 4px;
  p {
    font-size: 8px;
    font-weight: lighter;
  }
`;
export const SmallCardHeader = styled.div`
  p {
    ::first-letter {
      text-transform: uppercase;
    }
    font-size: 13px;
    font-weight: bold;
  }
`;
export const LargeContainer = styled.div`
  background-color: var(--opacityBlue);
  width: 500px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 1px solid #ffffff00;
  :hover {
    cursor: pointer;
    border: 1px solid var(--darkBlue);
  }
`;
export const LargeImgHouse = styled.div`
  display: flex;

  img {
    width: 200px;
    height: 111px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    right: 9px;
  }
  button {
    position: relative;
    left: 40px;
    top: 10px;
    height: 26px;
    width: 26px;
    border-radius: 70px;
    border: 1px solid var(--lightOrange);
    background-color: var(--lightOrange);
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: var(--mainGray);
      border: 1px solid #ffffff;
    }
    z-index: 2;
  }
`;
export const Description = styled.div`
  width: 260px;
  p {
    font-size: 10px;
  }
  b {
    font-size: 10px;
  }
`;
export const InfoDescription = styled.div`
  p {
    font-weight: bold;
    ::first-letter {
      text-transform: uppercase;
    }
  }
`;
export const LargePrice = styled.div`
  display: flex;
  gap: 5px;
  margin: 5px;
  flex-direction: row-reverse;
  align-items: center;
  width: 30%;
  p {
    font-size: 18px;
    font-weight: bold;
  }
  button {
    background-color: transparent;
    border: none;
    img {
      width: 10px;
      margin-left: 15px;
    }
  }
`;
export const LargeInfoHouse = styled.div`
  display: flex;
  width: 64%;
  justify-content: flex-end;
  margin-top: 5px;
  margin-left: 15px;
`;
