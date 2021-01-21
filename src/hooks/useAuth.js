import {useGoogleLogin, useGoogleLogout} from "react-google-login";
import {GOOGLE_CLIENT_ID} from "../constants/Consts";
import {authActions} from "../redux/ActionCreators";
import {useEffect} from "react";

export const useAuth = () => {

    const onSuccess = (res) => {
        console.log('@@res',res);
        const {profileObj, accessToken, googleId, tokenId} = res;
        authActions.updateState({
            profileObj, accessToken, googleId, tokenId,
            isLoggedIn: true,
        })
    }

    const onFailure = (err) => {
        console.log('err',err);
    }

    const onLogoutSuccess = () => {
        authActions.updateState({
            profileObj: null, accessToken: '', googleId: '',  tokenId: '',
            isLoggedIn: false,
        })
    }
    const scopes = [
        'https://www.googleapis.com/auth/youtube'
    ]

    const { signIn, loaded } = useGoogleLogin({
        onSuccess,
        onAutoLoadFinished: () => {},
        clientId: GOOGLE_CLIENT_ID,
        cookiePolicy:'single_host_origin',
        isSignedIn: true,
        onFailure,
        scope: 'email profile',
        scopes,
    })

    const { signOut } = useGoogleLogout({
        onFailure,
        clientId: GOOGLE_CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        onLogoutSuccess
    })

    useEffect(() => {
        authActions.updateState({loaded})
    },[loaded])


    return {signIn, signOut}
}