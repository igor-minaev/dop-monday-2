import React, {FC} from 'react';
import {FilterValuesType} from "../App";

type SuperButtonPropsType = {
    name: string
    callBack: () => void
    filter?: FilterValuesType
}

export const SuperButton: FC<SuperButtonPropsType> = ({name, callBack, filter}) => {
    const onClickHandler = () => {
        callBack()
    }
    return (
        <button className={filter === name.toLowerCase() ? "active-filter" : ""}
                onClick={onClickHandler}>{name}</button>
    );
};

