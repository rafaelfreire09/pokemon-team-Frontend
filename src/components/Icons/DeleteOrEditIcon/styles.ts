import styled from 'styled-components';
import { StyledProps } from './types';

export const Container = styled.div<StyledProps>`
    margin-right: 15px;

    width: 40px;
    height: 40px;
    background-color: ${
        ({ color }) => color
    };
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

export const IconType = styled.img``;