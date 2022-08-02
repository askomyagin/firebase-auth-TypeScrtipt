import styled from '@emotion/styled';

const Alert = () => {
    const AlertContainer = styled.div`
        border-radius: 20px;
        position: fixed;
        bottom: 30px;
        right: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 100px;
        z-index: 999;
        background-color: #fff;
        border: 1px solid tomato;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    `;
    const Text = styled.div`
        width: 100px;
        text-align: center;
    `;
    return (
        <AlertContainer>
            <Text>Неправильно введены данные</Text>
        </AlertContainer>
    );
};

export default Alert;
