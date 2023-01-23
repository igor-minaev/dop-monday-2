import React, {ChangeEvent} from 'react';

type SuperInputType = {
    setNewTitle: (title: string) => void
    newTitle: string
}

export const SuperInput = (props: SuperInputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.setNewTitle(e.currentTarget.value)
    return (
        <div>
            <input onChange={onChangeHandler} value={props.newTitle}/>
        </div>
    );
};

