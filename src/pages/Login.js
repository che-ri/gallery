import React, { useState, useRef } from "react";
import { Grid, Input, Button, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const login = () => {
        dispatch(userActions.loginFB(id, pwd));
    };

    return (
        <>
            <Grid is_flex_column>
                <Text>아이디</Text>
                <Input
                    placeholder="아이디를 입력해주세요!"
                    _onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호</Text>
                <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요!"
                    _onChange={e => setPwd(e.target.value)}
                />
            </Grid>
            <Grid>
                <Button _onClick={login}>로그인</Button>
            </Grid>
        </>
    );
};

export default Login;
