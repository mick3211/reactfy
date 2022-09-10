import {
    CustomLogo,
    LoginContainer,
    Message,
} from 'ui/styles/pages/login.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LocalStorage } from 'data/services/StorageService';
import { Button } from 'ui/components/inputs/Button/Button';

export function LoginCallback() {
    const [error, setError] = useState('');
    const [params] = useSearchParams();
    const code = params.get('code') as string;
    const redirectUri = 'http://127.0.0.1:5173/login/callback';
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const searchParams = new URLSearchParams({
        code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
        client_id,
        code_verifier: import.meta.env.VITE_SPOTIFY_CODE_VERIFIER,
    });
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(client_id + ':' + client_secret),
    };

    const requestToken = async () => {
        try {
            const tokens = (
                await axios.post<{
                    access_token: string;
                    refresh_token: string;
                }>('https://accounts.spotify.com/api/token', searchParams, {
                    headers,
                })
            ).data;

            LocalStorage.set('access_token', tokens.access_token);
            LocalStorage.set('refresh_token', tokens.refresh_token);
            window.location.reload();
        } catch (e) {
            console.log(e);
            setError('Não foi possível realizar o login, tente novamente.');
        }
    };

    useEffect(() => {
        requestToken();
    }, []);

    return (
        <LoginContainer>
            <div>
                <img
                    src="/Spotify_Logo_RGB_Green.png"
                    alt="Spotify"
                    width={256}
                />
                <CustomLogo>Reactfy</CustomLogo>

                <Message>
                    {error.length > 0 ? error : 'Por favor, aguarde...'}
                </Message>
                {error.length > 0 && (
                    <a href="http://accounts.spotify.com/authorize?client_id=afab5fb5098d4cfe81f2e3d0aefadb4f&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173%2Flogin%2Fcallback&state=asdsafsgfdwefdsfsd&scope=user-read-recently-played%20playlist-read-private%20user-library-read&code_challenge_method=S256&code_challenge=QfXYGMRkRYWFHHTiak2U-r0RS5TpnuQoij6OTZ4r97w">
                        <Button>Autorizar</Button>
                    </a>
                )}
            </div>
        </LoginContainer>
    );
}
