import React from "react";

import { Grid, Input } from "../elements";

const Header = () => {
    const [is_login, setIsLogin] = React.useState(false);

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
