import { Dispatch, SetStateAction } from "react";

export interface WelcomeModalProps {
    openWelcomeModal: boolean;
    setOpenWelcomeModal: Dispatch<SetStateAction<boolean>>;
    gameMode: string;
    setGameMode: Dispatch<SetStateAction<string>>;
    playerOneName: string;
    setPlayerOneName: Dispatch<SetStateAction<string>>;
    setPlayerTwoName: Dispatch<SetStateAction<string>>;
};

export interface PlayerDataProps {
    playerOneName: string;
    playerTwoName: string;
    playerOneScore: number,
    playerTwoScore: number; 
};

export interface PlayerInfoProps {
    title: string;
    name: string;
    score: number;
};

export interface PlayerInputProps {
    player: number;
    value: string;
    setPlayerOne: Dispatch<SetStateAction<string>>;
    setPlayerTwo: Dispatch<SetStateAction<string>>;
    setPlayerOneName: Dispatch<SetStateAction<string>>;
    gameMode: string;
    setPlayerTwoName: Dispatch<SetStateAction<string>>;
    setOpenWelcomeModal: Dispatch<SetStateAction<boolean>>;
};