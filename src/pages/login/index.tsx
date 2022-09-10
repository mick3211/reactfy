import { Button } from 'ui/components/inputs/Button/Button';
import {
    CustomLogo,
    LoginContainer,
    Message,
} from 'ui/styles/pages/login.styled';

export const LoginPage: React.FC = () => {
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
                    Por favor, autorize o acesso à sua conta spotify para
                    utilizar o aplicativo
                </Message>
                <a href="http://accounts.spotify.com/authorize?client_id=afab5fb5098d4cfe81f2e3d0aefadb4f&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173%2Flogin%2Fcallback&state=asdsafsgfdwefdsfsd&scope=user-read-recently-played%20playlist-read-private%20user-library-read&code_challenge_method=S256&code_challenge=QfXYGMRkRYWFHHTiak2U-r0RS5TpnuQoij6OTZ4r97w">
                    <Button>Autorizar</Button>
                </a>
            </div>
        </LoginContainer>
    );
};
