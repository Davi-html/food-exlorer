import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-align: center;
    color: ${({theme: {color}}) => color.light100};
    text-decoration: none;
    cursor: pointer;
    margin-top: 30px;
  }

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
    height: auto;
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
      gap: 5px;

      input {
        margin-bottom: 20px;
        height: 48px;
        width: 100%;
        border-radius: 10px;
        padding: 12px 14px;
        outline: none;
        border: none;

        color: ${({theme: {color}}) => color.light500};

        background: ${({theme: {color}}) => color.dark900};
      }
    }
  } 
`