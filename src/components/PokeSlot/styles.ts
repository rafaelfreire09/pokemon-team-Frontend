import styled from 'styled-components';

import { IStyledProps } from './types';
import { IColorType } from '../../types/color';

export const Container = styled.div<IStyledProps>`
    margin: 10px 0px 10px 30px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    position: relative;

    filter: ${
        ({ grayScale }) => grayScale
    };
`;

export const Image = styled.img<IStyledProps>`
    width: 85px;
    height: 85px;

    position: absolute;
    margin-top: -6px;

    cursor: ${
        ({ cursor }) => cursor
    };
`;

export const Division = styled.div`
    width: 68px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const DivisionLine = styled.div`
    background-color: #E5E5E5;
    width: 68px;
    height: 5px;

    position: absolute;

    margin-top: 100%;
`;

export const DivisionCircle = styled.div`
    background-color: #E5E5E5;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    position: absolute;
    margin-top: 100%;
`;

export const BallTop = styled.div<IColorType>`
    background-color: ${
        ({ color }) => color
    };
    display: inline-block;

    height: 33px;
    width: 68px;

    border-top-left-radius: 68px;
    border-top-right-radius: 68px;
`;

export const BallBottom = styled.div<IColorType>`
    background-color: ${
        ({ color }) => color
    };
    display: inline-block;

    height: 33px;
    width: 68px;

    border-bottom-left-radius: 68px;
    border-bottom-right-radius: 68px;
`;