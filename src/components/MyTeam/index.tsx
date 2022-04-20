import * as S from './styles';

import { IProps } from './types';

import PokeSlot from '../PokeSlot';
import PenIcon from '../Icons/PenIcon';
import RemOrSubIcon from '../Icons/RemOrSubIcon';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { changeTeamName } from '../../redux/myTeamSlice';

function MyTeam({ text, pen, icons, team }: IProps) 
{
    const [ teamName, setTeamName ] = useState('');
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            changeTeamName(
                {
                    name: teamName
                }
            )
        )
    }, [teamName])

    const handleTeamNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTeamName(event.target.value)
        console.log(event.target.value);
    }

    return (
        <S.Container>
            <S.Title>
                {text && 
                    <S.Input
                        placeholder={text}
                        type="text"  
                        onChange={handleTeamNameInput}
                        value={teamName}
                        //type="search" 
                        //onsearch={handleTeamNameInput}  
                    />
                }
                {/* {teamName && 
                    <S.Text>
                        {teamName}
                    </S.Text>
                } */}
                {team?.name && 
                    <S.Text>
                        {team?.name}
                    </S.Text>
                }
                {pen && <PenIcon />}
            </S.Title>

            <S.SlotTop>
                <PokeSlot idP={0} full={team?.pokemons[0]}/>
                <PokeSlot idP={1} full={team?.pokemons[1]}/>
                <PokeSlot idP={2} full={team?.pokemons[2]}/>
            </S.SlotTop>

            <S.SlotBottom>
                <PokeSlot idP={3} full={team?.pokemons[3]}/>
                <PokeSlot idP={4} full={team?.pokemons[4]}/>
                <PokeSlot idP={5} full={team?.pokemons[5]}/>
            </S.SlotBottom>

            {icons && 
                <S.Icons>
                    <RemOrSubIcon type={"remove"}/>
                    <RemOrSubIcon type={"submit"}/>
                </S.Icons>
            }
        </S.Container>
    );
}

export default MyTeam;