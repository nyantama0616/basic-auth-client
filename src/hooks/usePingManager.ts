import { useState } from 'react';
import IPingManager from '../interfaces/IPingManager';

export default function usePingManager(): IPingManager {
    const [message, setMessage] = useState('');

    /* Look at Me!
        GET /pongを叩いてメッセージを取得する
     */
    function submit() {
        console.log("GET /pong");
    }

    return {
        message,
        submit
    }
}
