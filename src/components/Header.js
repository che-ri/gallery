import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";

import { Grid, Input } from "../elements";

const Header = () => {
    const dispatch = useDispatch();
    const is_login = useSelector(state => state.user.is_login); //리덕스스토어에 저장된 state 값으로 로그인확인
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true : false;
    console.log(`is_session: ${is_session}, is_login:${is_login}`);
    if (is_login && is_session)
        return (
            <>
                <Grid is_flex padding="20px">
                    <Grid />
                    {/* <Grid is_flex width="200px" margin="0 20px 0 0"> */}
                    <Grid is_flex width="300px">
                        <Input type="Link" to="/" text="홈" />
                        <Input
                            type="Link"
                            to="/login"
                            text="로그아웃"
                            _onClick={() => dispatch(userActions.logoutFB())}
                        />
                        <Input type="Link" to="/Write" text="글쓰기" />
                    </Grid>
                </Grid>
            </>
        );
    return (
        <>
            <Grid is_flex padding="20px">
                <Grid />
                {/* <Grid is_flex width="200px" margin="0 20px 0 0"> */}
                <Grid is_flex width="200px">
                    <Input type="Link" to="/login" text="로그인" />
                    <Input type="Link" to="/signup" text="회원가입" />
                </Grid>
            </Grid>
        </>
    );
};

export default Header;
