import styled from 'styled-components';

import background from '../../assets/images/background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  height: 50px;
  background-color: #041f4a;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 35px;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      font-size: 14px;

      svg {
        margin-right: 5px;
      }
    }

    &:nth-of-type(2) {
      width: 400px;
      background-color: #fff;
      height: 30px;
      border-radius: 3px;
      color: #bbb;
      padding: 0 10px;

      input {
        flex: 1;
        padding-right: 10px;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${background});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 40px auto;

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      margin-right: 80px;
      color: #555;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #333;
        text-decoration: underline;
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const Main = styled.main`
  margin-top: 50px;
  padding-bottom: 40px;

  h2 {
    color: #cf9578;
  }

  > p {
    color: #444;
    margin: 15px 0 40px 0;
    font-weight: bold;
  }

  aside {
    width: 49%;

    h3 {
      text-align: center;
      color: white;
      background-color: #cf9578;
      padding: 8px 0 8px 5px;
      font-size: 18px;
      font-weight: lighter;

      span {
        font-weight: bold;
      }
    }

    img {
      width: 100%;
      height: 540px;
    }
  }

  div:nth-of-type(2) {
    margin-top: 40px;

    p {
      color: #444;
      font-size: 14px;
      line-height: 28px;
      margin: 30px 0;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cf9578;

    border-bottom: 1px solid #cf9578;

    h3 {
      color: white;
      padding: 8px 0 8px 5px;
      font-size: 18px;
      font-weight: lighter;

      a {
        color: white;
        font-weight: 400;
        text-decoration: underline;
      }
    }
  }
`;

export const ContentMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InfoMain = styled.div`
  width: 49%;

  > div {
    margin-bottom: 40px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  h2 {
    font-size: 18px;
  }

  p {
    padding-right: 10px;
    color: #444;
    font-size: 14px;
    line-height: 28px;
    margin: 10px 10px 30px 0;
  }
`;
