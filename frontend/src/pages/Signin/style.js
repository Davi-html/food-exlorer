import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    color: ${({theme: {color}}) => color.light100};
    
    img{
      object-fit: contain;
    }
  }

  .form {
    height: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;


    form{
      color: ${({theme: {color}}) => color.light400} ;
      

      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;

    }
  } 
`