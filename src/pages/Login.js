import React, { useState } from "react";
import { Grid, Input, Button, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    // console.log(useSelector(state => state));
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const login = (id, pwd) => {};

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
                    placeholder="비밀번호를 입력해주세요!"
                    _onChange={e => setPwd(e.target.value)}
                />
            </Grid>
            <Grid>
                <Button>로그인</Button>
            </Grid>
        </>
    );
};

export default Login;
