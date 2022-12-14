import React from "react";
import moment from "moment";
import { Box, Grid, Paper, Card, CardMedia, Typography } from "@mui/material";

const RenderItem = ({ item }) => {
	return (
		<Card
			sx={{
				display: "flex",
				height: { xs: "20vh", sm: "30vh", md: "40vh" },
				direction: "column",
			}}
			mb={2}
		>
			<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
				<Grid item xs={8}>
					{/* <Box sx={{ flexBasis: { xs: "50%", sm: "50%", md: "50%" } }} pb={10}> */}
					<CardMedia
						component="img"
						sx={{
							width: {
								xs: 200,
								sm: 200,
								md: 500,
							},
							height: {
								xs: "auto",
							},
							borderRadius: 10,
						}}
						image={item.node.field_photo_image_section}
						alt="images"
						loading="lazy"
					/>
					{/* </Box>{" "} */}
				</Grid>
				<Grid item xs={4}>
					{/* <Box sx={{ flexBasis: { xs: "50%", sm: "50%", md: "50%" } }} pb={2}> */}
					<Typography
						variant="h6"
						gutterBottom
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "-webkit-box",
							WebkitLineClamp: "3",
							lineClamp: "2",
							WebkitBoxOrient: "vertical",
							fontSize: { xs: 15, sm: 20, md: 20 },
						}}
					>
						{item.node.title ? item.node.title : ""}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							mt: { xs: 0.5, sm: 1, md: 1 },
							color: "#424242",
							fontSize: { xs: 10, sm: 18, md: 20 },
							fontStyle: "italic",
						}}
					>
						{moment(item.node.last_update).format("ll, h:mm A")} IST
					</Typography>
					{/* </Box>{" "} */}
				</Grid>
			</Grid>
		</Card>
	);
};

export default RenderItem;
