import { Box, Grid, Button, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import usePingManager from "../../hooks/usePingManager";

interface PingProps {
    sx?: SxProps
}
export default function PingPage({ sx }: PingProps) {
    const manager = usePingManager();
    
    return (
        <Box sx={{ ...sx }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" mt={2}>GET /pong</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={manager.submit}>Pong!</Button>
                </Grid>
                <Grid item container xs={12} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h6">↓Response↓</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            borderRadius={2}
                            sx={{
                            backgroundColor: "#cceeee", height: "100px", display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <Typography variant="body1">{manager.message}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
