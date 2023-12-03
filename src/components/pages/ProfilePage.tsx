import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { useUserListManager } from "../../contexts/UserListContext";
import { useNavigate } from "react-router-dom";
import User from "../../types/User";

interface ProfilePageProps {
    sx?: SxProps
}
export default function ProfilePage({ sx }: ProfilePageProps) {
    const manager = useUserListManager();
    const user = manager.selectedUser;
    const navigate = useNavigate();

    function _handleEditButtonClick() {
        navigate("/edit-profile");
    }

    return (
        <Box sx={{ ...sx }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h6" mt={2}>プロフィール</Typography>
                </Grid>
                {
                    user ? (
                        <Profile user={user} onClickEditButton={_handleEditButtonClick} />
                    ) : (
                        <Grid item xs={12}>
                            <Typography variant="h6">ユーザーが選択されていません</Typography>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

interface ProfileProps {
    user: User;
    onClickEditButton: () => void;
}
function Profile({ user, onClickEditButton }: ProfileProps) {
    return (
        <>
            <Grid item xs={10}>
                <table style={{ textAlign: "left" }}>
                    <tbody>
                        <tr>
                            <th>ユーザーID</th>
                            <td>{user?.user_id}</td>
                        </tr>
                        <tr>
                            <th>パスワード</th>
                            <td>{user?.password}</td>
                        </tr>
                        <tr>
                            <th>ニックネーム</th>
                            <td>{user?.nickname}</td>
                        </tr>
                        <tr>
                            <th>コメント</th>
                            <td>{user?.comment}</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={onClickEditButton}>編集</Button>
            </Grid>
        </>
    );
}
