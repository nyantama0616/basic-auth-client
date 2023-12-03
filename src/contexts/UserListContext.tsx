import IUserListManager from "../interfaces/IUserListManager";
import { createContext, useContext, useEffect, useState } from "react";
import User from '../types/User';
import axios from "axios";
import requests from "../requests";

const initialValue: IUserListManager = {
    users: [],
    selectedUser: null,
    selectUser: () => { },
    update: () => { },
};

const UserListContext = createContext<IUserListManager>(initialValue);

export function useUserListManager() {
    return useContext(UserListContext);
}

interface State {
    users: User[];
    selectedUser: User | null;
    isUpdatable: boolean;
}

const initialState: State = {
    users: [
        { user_id: "user1", password: "pass", nickname: "ぱっぴー", comment: "よろしくおねがいします" },
    ],
    selectedUser: null,
    isUpdatable: true,
};

interface UserListProviderProps {
    children: React.ReactNode;
}
export default function UserListProvider({ children }: UserListProviderProps) {
    const [state, setState] = useState(initialState);

    /* Look at Me!
        GET /usersを叩いてユーザーリストを更新する
     */
    function update() {
        if (!state.isUpdatable) return;
        console.log("GET /users");

        axios.get(requests.getUsers)
            .then((res) => {
                const users = res.data.users as User[];
                setState({ ...state, users: users });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function selectUser(user_id: string) {
        const user = state.users.find((user) => user.user_id === user_id) || null;
        
        setState({ ...state, selectedUser: user });
    }

    const value = {
        users: state.users,
        selectedUser: state.selectedUser,
        selectUser: selectUser,
        update: update,
    }

    useEffect(() => {
        update();
    }, []);

    return (
        <UserListContext.Provider value={value}>
            {children}
        </UserListContext.Provider>
    );
}
