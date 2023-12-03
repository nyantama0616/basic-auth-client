import { Button, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
    title: string;
    path?: string
    sx?: SxProps;
}

export default function NavButton({ title, path = "#", sx }: NavButtonProps) {
    const navigate = useNavigate();

    function _navigate() {
        navigate(path);
    }

    return (
        <Button variant="contained" sx={{ ...sx }} onClick={_navigate}>{title}</Button>
    );
}
