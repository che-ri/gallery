import React, { useState } from "react";
import { Grid, Text, Input, Button } from "../elements";
import { actionsCreators as userActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";

const Signup = () => {
    const dispatch = useDispatch();
    console.log(useSelector((state) => state));
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd_check, setPwdCheck] = useState("");
    const [user_name, setUserName] = useState("");

    const handleSignup = () => {
        const user = {
            id,
            pwd,
            user_name,
        };
        if (pwd === pwd_check) dispatch(userActions.setUser(user));
    };

    return (
        <>
            <Grid is_flex_column>
                <Text>아이디</Text>
                <Input
                    placeholder="아이디를 입력해주세요!"
                    _onChange={(e) => setId(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>닉네임</Text>
                <Input
                    placeholder="닉네임을 입력해주세요!"
                    _onChange={(e) => setUserName(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호</Text>
                <Input
                    placeholder="비밀번호를 입력해주세요!"
                    _onChange={(e) => setPwd(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호 확인</Text>
                <Input
                    placeholder="비밀번호를 다시 입력해주세요!"
                    _onChange={(e) => setPwdCheck(e.target.value)}
                />
            </Grid>
            <Grid>
                <Button _onClick={handleSignup}>완료</Button>
            </Grid>
        </>
    );
};

export default Signup;
