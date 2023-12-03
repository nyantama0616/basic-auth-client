import { useState } from 'react';
import ISignUpManager from '../interfaces/ISignUpManager';

interface State {
    user_id: string;
    password: string;
    isSubmittable: boolean; //2回以上連続でsubmitできないようにするためのフラグ
}

const initialState: State = {
    user_id: '',
    password: '',
    isSubmittable: true,
};

export default function useSignUpManager(): ISignUpManager {
    const [state, setState] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prev => {
            return {
            ...prev,
            [name]: value,
            }
        });
    };

    /* Look at Me!
        POST /usersを叩いてユーザーを作成する
     */
    function submit() {
        if (!state.isSubmittable) return;
        console.log("POST /users", state);
        _clear();
    }

    function _clear() {
        setState(initialState);
    }

    return {
        user_id: state.user_id,
        password: state.password,
        handleChange,
        submit
    }
}
