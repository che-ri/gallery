import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";

import { Grid, Input } from "../elements";

const Header = () => {
    const dispatch = useDispatch();
    const is_login = useSelector(state => state.user.is_login); //리덕스스토어에 저장된 state 값으로 로그인확인
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key);
    //두 가지를 모두 체크해야되는이유는? 로직 때문에 그런데,
    //세션키는 탭이 꺼져야 만료가 되는데, 탭을 끄지않고 로그아웃버튼을 누르면 세션키에 있는 정보는 날아가지 않고, 리덕스에 있는 유저정보만 날라간다. is_login은 fasle고, is_session은 true가 되는상황
    //하지만, 재렌더링 시에 loginCheck 기능으로 세션키에 있는 유저정보를 보고 FB에 있는 유저정보를 state에 주입시키게 되버린다. is_login이 true, is_session도 true (그러니까 로그아웃이 안되는거지.)
    //그러니까, 양 쪽을 모두 확인시켜주어야 한다.
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
                            _onClick={() => dispatch(userActions.logOut())}
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
