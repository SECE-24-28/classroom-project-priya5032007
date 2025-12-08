import styled from "styled-components";
export const OurPromisesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .parent {
    display: flex;
    flex-wrap: wrap;
  }
  .child {
    display: flex;
    max-width: 380px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
  }
`;