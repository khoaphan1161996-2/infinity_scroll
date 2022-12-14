import { Card, CardMedia, Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const RenderItem = ({ item }) => {
	return (
		<Card
			sx={{
				display: "flex",
				direction: "column",
				marginBottom: 4,
				boxShadow: "none",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} md={8} lg={6}>
					<CardMedia
						component="img"
						sx={{
							width: "100%",

							height: "auto",

							borderRadius: 10,
						}}
						image={item.node.field_photo_image_section}
						alt="images"
						loading="lazy"
					/>
				</Grid>
				<Grid item xs={12} md={4} lg={6}>
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
						{moment(item.node.last_update * 1000).format("ll, h:mm A")} IST
					</Typography>
				</Grid>
			</Grid>
		</Card>
	);
};

export default RenderItem;
