import { FC, useState, useEffect } from 'react';
import { Button, ButtonContainer, InputContainer, Input } from './styledForm';
import Alert from './alert';

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
    showAlert: boolean;
    updateAlert: (value: boolean) => void;
}

const Form: FC<FormProps> = ({
    title,
    handleClick,
    showAlert,
    updateAlert,
}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        setTimeout(() => {
            updateAlert(false);
        }, 2500);
    }, [updateAlert]);

    return (
        <div>
            <InputContainer>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
            </InputContainer>
            <ButtonContainer>
                <Button onClick={() => handleClick(email, pass)}>
                    {title}
                </Button>
            </ButtonContainer>
            {showAlert && Alert()}
        </div>
    );
};

export { Form };
