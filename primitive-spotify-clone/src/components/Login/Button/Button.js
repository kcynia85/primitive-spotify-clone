import styled from 'styled-components';

const Button = styled.a`
    padding: 20px;
    border-radius: 99px;
    background: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    color: hsl(0, 0%, 100%);
    text-decoration: none;
`;

export default Button;