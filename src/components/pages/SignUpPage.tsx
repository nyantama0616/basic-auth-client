import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import useSignUpManager from "../../hooks/useSignUpManager";

interface SignUpPage {
    sx?: SxProps
}
export default function SignUpPage({ sx }: SignUpPage) {
    const manager = useSignUpManager();

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", ...sx }}>
            <form action="">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={10}>
                        <Typography variant="h6" mt={2}>ユーザーを作成</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField
                            label="ユーザーID"
                            name="user_id"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={manager.user_id}
                            onChange={manager.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField
                            type="password"
                            label="パスワード"
                            name="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={manager.password}
                            onChange={manager.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" onClick={manager.submit}>作成</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
