import React from "react";
import { Grid, Input, Button, Text } from "../elements";

const Login = () => {
    return (
        <>
            <Grid is_flex_column>
                <Text>아이디</Text>
                <Input placeholder="아이디를 입력해주세요!" />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호</Text>
                <Input placeholder="비밀번호를 입력해주세요!" />
            </Grid>
            <Grid>
                <Button>로그인</Button>
            </Grid>
        </>
    );
};

export default Login;
