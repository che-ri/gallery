import React from "react";
import { apiKey } from "./firebase";

const Permit = ({ children }) => {
    const is_login = useSelector(state => state.user.is_login); //리덕스스토어에 저장된 state 값으로 로그인확인
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key);
    if (is_login && is_session) return <>{children}</>;
};

export default Permit;
