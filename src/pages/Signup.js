import React from "react";
import { Grid, Text, Input, Button } from "../elements";

const Signup = () => {
    return (
        <>
            <Grid is_flex_column>
                <Text>아이디</Text>
                <Input placeholder="아이디를 입력해주세요!" />
            </Grid>
            <Grid is_flex_column>
                <Text>닉네임</Text>
                <Input placeholder="닉네임을 입력해주세요!" />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호</Text>
                <Input placeholder="비밀번호를 입력해주세요!" />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호 확인</Text>
                <Input placeholder="비밀번호를 다시 입력해주세요!" />
            </Grid>
            <Grid>
                <Button>완료</Button>
            </Grid>
        </>
    );
};

export default Signup;
