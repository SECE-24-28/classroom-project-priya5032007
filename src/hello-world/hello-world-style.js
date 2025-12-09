import styled from "styled-components";

export const HelloWorldStyle = styled.div`
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }

  .square__child {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    margin: 10px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .square__child:hover {
    transform: scale(1.1);
  }

  .square__rectangle {
    width: 200px;
    height: 100px;
    background-color: #e74c3c;
    margin: 10px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .square__rectangle:hover {
    transform: scale(1.1);
  }
`;