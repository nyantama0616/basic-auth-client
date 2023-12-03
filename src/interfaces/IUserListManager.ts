import User from "../types/User";

export default interface IUserListManager {
    users: User[];
    selectedUser: User | null;
    selectUser: (user_id: string) => void;
    update: () => void;
}
