import User from '../types/User';
import { Base64 } from 'js-base64';

export default function getToken(user: User) {
    const base64 = Base64.encode(`${user.user_id}:${user.password}`);
    return `Basic ${base64}`;
}
