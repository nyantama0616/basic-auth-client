import { Box, Grid, Typography, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { useUserListManager } from "../../contexts/UserListContext";
import useEditProfileManager from "../../hooks/useEditProfileManager";
import User from "../../types/User";
import { useNavigate } from "react-router-dom";

interface EditProfilePageProps {
    sx?: SxProps
}
export default function EditProfilePage({ sx }: EditProfilePageProps) {
    const userListManager = useUserListManager();
    const user = userListManager.selectedUser;

    return (
        <Box sx={{ ...sx }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h6" mt={2}>プロフィール</Typography>
                </Grid>
                {
                    user ? (
                        <EditProfile user={user} />
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

interface EditProfileProps {
    user: User;
}
function EditProfile({ user }: EditProfileProps) {
    const editProfileManager = useEditProfileManager(user);
    const navigate = useNavigate();

    function _handleDeleteButtonClick() {
        editProfileManager.destroy();
        navigate("/");
    }

    function _handleSaveButtonClick() {
        editProfileManager.submit();
        navigate("/profile");
    }

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
                            <td>
                                <input
                                    name="nickname"
                                    value={editProfileManager.nickname}
                                    onChange={editProfileManager.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>コメント</th>
                            <td>
                                <input
                                    name="comment"
                                    value={editProfileManager.comment}
                                    onChange={editProfileManager.handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
            <Grid item container justifyContent="center" spacing={2} xs={12}>
                <Grid item xs={5}>
                    <Button variant="contained" color="error" onClick={_handleDeleteButtonClick}>削除</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button variant="contained" onClick={_handleSaveButtonClick}>保存</Button>
                </Grid>
            </Grid>
        </>
    )
}
