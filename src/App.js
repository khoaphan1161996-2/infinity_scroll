import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import RenderItem from "./RenderItem/RenderItem";
import useItemSearch from "./useItemSearch";

export default function App() {
	const [pageNumber, setPageNumber] = useState(1);

	const { items, hasMore, loading, error } = useItemSearch(pageNumber);

	const observer = useRef();
	const lastBookElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<Container maxWidth="lg">
			<Box
				component="div"
				sx={{
					alignItems: "center",
					justifyContent: "center",
					pt: 2,
					pb: 2,
				}}
			>
				{items.length > 0 &&
					items.length > 0 &&
					items.map((item, index) => {
						if (items.length === index + 1) {
							return (
								<div ref={lastBookElementRef} key={item.node.nid}>
									<RenderItem item={item} />
								</div>
							);
						} else {
							return (
								<div key={item.node.nid}>
									<RenderItem item={item} />
								</div>
							);
						}
					})}
				<div>{loading && "Loading..."}</div>
				<div>{error && "Error"}</div>
			</Box>
		</Container>
	);
}
