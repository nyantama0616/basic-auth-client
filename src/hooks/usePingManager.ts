import { useState } from 'react';
import IPingManager from '../interfaces/IPingManager';
import axios from 'axios';
import requests from '../requests';

export default function usePingManager(): IPingManager {
    const [message, setMessage] = useState('');

    /* Look at Me!
        GET /pongを叩いてメッセージを取得する
     */
    function submit() {
        console.log("GET /pong");
        
        axios
            .get(requests.pong)
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return {
        message,
        submit
    }
}
