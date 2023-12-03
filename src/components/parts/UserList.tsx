import { Box, Typography, List, ListItemButton, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { useUserListManager } from "../../contexts/UserListContext";
import { useNavigate } from "react-router-dom";

interface UserListProps {   
    sx?: SxProps
}

export default function UserList({ sx }: UserListProps) {
    const manager = useUserListManager();
    const navigate = useNavigate();

    function handleListItemClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const user_id = e.currentTarget.textContent || ""; //keyで取得できないのか...
        
        manager.selectUser(user_id);
        navigate("/profile");
    }

    const items = manager.users.map((user) => {
        return (
            <ListItemButton key={ user.user_id } onClick={handleListItemClick} sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography variant="h6">
                    {user.user_id}
                </Typography>
            </ListItemButton>
        );
    });
    return (
        <Box sx={{...sx, overflow: "scroll" }}>
            <Typography variant="h6" mt={2}>
                ユーザーリスト
            </Typography>
            <Button variant="contained" onClick={manager.update}>更新</Button>
            <List>
                {items}
            </List>
        </Box>
    );
}
