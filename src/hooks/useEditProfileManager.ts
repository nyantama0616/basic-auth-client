import { useEffect, useState } from "react";
import IEditProfileManager from "../interfaces/IEditProfileManager";
import User from "../types/User";

interface State {
    nickname: string;
    comment: string;
    isSubmittable: boolean;
}

const initialState: State = {
    nickname: '',
    comment: '',
    isSubmittable: true,
};

export default function useEditProfileManager(user: User): IEditProfileManager {
    const [state, setState] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    /* Look at Me!
        PATCH /users/:idを叩いてユーザー情報を更新する
     */
    function submit() {
        if (!state.isSubmittable) return;
        console.log("PATCH /users/:id", state);
    }

    /* Look at Me!
        POST /closeを叩いてユーザーを削除する
     */
    function destroy() {
        console.log('POST /close', { user_id: user.user_id });
    }

    useEffect(() => {
        setState(prev => {
            return {
                ...prev,
                nickname: user.nickname || '',
                comment: user.comment || '',
            }
        });
    }, []);

    return {
        nickname: state.nickname,
        comment: state.comment,
        handleChange,
        destroy,
        submit,
    }
}
