import styled from '@emotion/styled';

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    min-width: 100px;
    display: block;
    padding: 5px 5px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    :focus {
        color: #212529;
        background-color: #fff;
        border-color: #bdbdbd;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
`;

export const Button = styled.button`
    margin: 20px 0 10px 0;
    width: 100px;
    height: 30px;
    border: none;
    background-color: black;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
`;
export const FormContainer = styled.input`
    display: flex;
    justify-content: center;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
