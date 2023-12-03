export default interface ISignUpManager {
    user_id: string;
    password: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: () => void;
}
