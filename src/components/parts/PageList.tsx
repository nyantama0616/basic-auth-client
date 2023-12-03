import { Box, List, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import NavButton from "./NavButton";
interface Page {
    title: string
    path: string
}

interface PageListProps {
    pages?: Page[][]
    sx?: SxProps
}

export default function PageList({ pages, sx }: PageListProps) {
    const items = pages?.map((block, i) => {
        return block.map((page, j) => {
            const key = i.toString() + j.toString();
            const mb = (j === block.length - 1) ? 5 : 2;
            return (
                <Box key={ key } sx={{ width: "100%", display: "flex", justifyContent: "center", mb: mb }}>
                    <NavButton title={page.title} path={page.path} sx={{ width: "100%", m: "0 10px" }} />
                </Box>
            );
        });
    });
    return (
        <Box sx={{...sx}}>
            <Typography variant="h6" mt={2}>
                ページリスト
            </Typography>
            <List>
                {items}
            </List>
        </Box>
    );
}
