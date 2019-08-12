import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import { $activeChatMessagesBlocks } from "~feautures/messaging/model/activeChatMessagesBlocks";
import { $activeChatMessages } from "../../../model/activeChat";
import { MessagesBlockSection } from "../molecules/MessagesBlockSection";

const targetId = "asdasd123";

export const MessagesList = () => {
	const messages = useStore($activeChatMessages);
	const cls = useStyles();
	const blocks = useStore($activeChatMessagesBlocks);
	const wrapper = React.useRef<any>();
	console.log({ blocks });

	const scrollToEnd = () => {
		if (wrapper.current) {
			wrapper.current.scrollTop = wrapper.current.scrollHeight;
		}
	};

	React.useEffect(() => scrollToEnd, [messages]);

	return (
		<>
			<div id={targetId} />
			<Paper square elevation={0} className={cls.wrapper} ref={(el) => (wrapper.current = el)}>
				{messages.length ? (
					<AutoSizer>
						{({ height, width }) => (
							<VariableSizeList
								itemCount={blocks.length}
								height={height}
								width={width}
								itemSize={getRowSize}
								estimatedItemSize={10}
							>
								{Row}
							</VariableSizeList>
						)}
					</AutoSizer>
				) : (
					<Typography variant="caption" color="textSecondary" className={cls.noMessages}>
						Нет сообщений
					</Typography>
				)}
			</Paper>
		</>
	);
};

const Row = ({ index, style }) => {
	return <MessagesBlockSection idx={index} style={style} />;
};

let target: HTMLDivElement;
const getRowSize = (idx: number) => {
	const blocks = $activeChatMessagesBlocks.getState();
	const block = blocks[idx];
	return block.messages.length * 34 + 8;
};

// {messages.length ? (
// 				blocks.map((_, idx) => <MessagesBlockSection idx={idx} />)
// 			) : (
// 				<Typography variant="caption" color="textSecondary" className={cls.noMessages}>
// 					Нет сообщений
// 				</Typography>
// 			)}
const useStyles = makeStyles((t) => ({
	wrapper: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		backgroundColor: t.palette.background.default,
		overflowY: "auto",
		height: "100%",
		paddingBottom: t.spacing(1)
	},
	noMessages: {
		margin: "auto"
	}
}));
