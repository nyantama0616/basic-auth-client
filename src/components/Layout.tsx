import { Box, Grid } from "@mui/material";
import PageList from "./parts/PageList";
import UserList from "./parts/UserList";

const pages = [
    [
        { title: "Home", path: "/" },
    ],
    [
        { title: "Pong", path: "/pong" },
    ],
    [
        { title: "ユーザーを作成", path: "/sign-up" },
    ],
];

interface LayoutProps {
    children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <Box sx={{ width: "100%", height: "100%", background: "#cccccc", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={12} lg={8} xl={6} >
                    <Box
                        sx={{
                            width: "100%",
                            height: "800px",
                            display: "grid",
                            gridTemplateColumns: "minmax(250px, 2fr) minmax(400px, 3fr) minmax(250px, 2fr)",
                            gap: "10px",
                        }}
                    >
                        <PageList
                            pages={pages}    
                            sx={{
                                gridColumn: "1",
                                backgroundColor: "#eeeeee",
                            }}
                        /> 
                        
                        {children}

                        <UserList
                            sx={{
                                gridColumn: "3",
                                backgroundColor: "#eeeeee",
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
