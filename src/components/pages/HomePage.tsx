import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
interface SignUpPage {
    sx?: SxProps
}
export default function HomePage({ sx }: SignUpPage) {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", ...sx }}>
            <Typography variant="h6" mt={2}>ホーム</Typography>
        </Box>
    )
}
