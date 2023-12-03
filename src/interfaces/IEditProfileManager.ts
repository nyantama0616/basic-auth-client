export default interface IEditProfileManager {
    nickname: string;
    comment: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    destroy: () => void;
    submit: () => void;
}
