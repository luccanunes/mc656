import { MouseEventHandler } from "react";

export interface PlaceProps {
    tiposDeAcessibilidade: string;
    cidade: string;
    nota: number;
    nome: string;
    endereco: string;
}

export interface FilterProps {
    cidade?: string;
    nome?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export type PlaceDetailsType = {
    [key: string]: {
        cidade: string;
        items: {
            title: string;
            description: string;
            className: string;
            backgroundImage: string;
        }[];
    };
};
export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface SearchcityProps {
    city: string;
    setcity: (city: string) => void;
}
