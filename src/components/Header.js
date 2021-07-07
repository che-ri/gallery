import React from "react";
import styled from "styled-components";

import Input from "../elements/Input";
import { Grid } from "../elements";

const Header = () => {
    return (
        <>
            <Grid is_flex>
                <Grid />
                <Grid is_flex width="200px" margin="0 20px 0 0">
                    <Input type="Link" to="/login" text="로그인" />
                    <Input type="Link" to="/signup" text="회원가입" />
                </Grid>
            </Grid>
        </>
    );
};

export default Header;
