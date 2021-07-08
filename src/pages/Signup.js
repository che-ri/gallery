import React, { useState } from "react";
import { Grid, Text, Input, Button } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import { emailCheck } from "../shared/common";

const Signup = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd_check, setPwdCheck] = useState("");
    const [user_name, setUserName] = useState("");
    const signup = () => {
        if (id === "" || pwd === "" || user_name === "") {
            window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
            return;
        }
        if (pwd !== pwd_check) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }
        if (!emailCheck) {
            window.alert("이메일형식이 맞지 않습니다.!");
            return;
        }

        return dispatch(userActions.signupFB(id, pwd, user_name));
    };

    return (
        <>
            <Grid is_flex_column>
                <Text>아이디</Text>
                <Input
                    placeholder="이메일 형식으로 입력해주세요!"
                    _onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>닉네임</Text>
                <Input
                    placeholder="닉네임을 입력해주세요!"
                    _onChange={e => setUserName(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호</Text>
                <Input
                    placeholder="비밀번호를 입력해주세요!"
                    _onChange={e => setPwd(e.target.value)}
                />
            </Grid>
            <Grid is_flex_column>
                <Text>비밀번호 확인</Text>
                <Input
                    placeholder="비밀번호를 다시 입력해주세요!"
                    _onChange={e => setPwdCheck(e.target.value)}
                />
            </Grid>
            <Grid>
                <Button _onClick={signup}>완료</Button>
            </Grid>
        </>
    );
};

export default Signup;
