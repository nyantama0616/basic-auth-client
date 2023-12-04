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
    users: { [user_id: string]: User }
    selectedUserId: string;
    isUpdatable: boolean;
}

const initialState: State = {
    users: {},
    selectedUserId: "",
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
                const usersMap: { [user_id: string]: User } = {};
                users.forEach((user) => {
                    usersMap[user.user_id] = user;
                });
                setState({ ...state, users: usersMap });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function selectUser(user_id: string) {
        setState({ ...state, selectedUserId: user_id });
    }

    const value: IUserListManager = {
        users: Object.values(state.users),
        selectedUser: state.users[state.selectedUserId] || null,
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
