/*
    リクエスト先のURLは一箇所にまてめておく
    こうすることで、リクエスト先のURLを変更しやすくなる
    (例えば、開発環境と本番環境でURLが異なる場合など)
*/

const requests = {
    pong: "http://localhost:3000/pong",
    signup: "http://localhost:3000/signup",
    getUsers: "http://localhost:3000/users",
    editProfile: (user_id: string) => `http://localhost:3000/users/${user_id}`,
}

export default requests;
