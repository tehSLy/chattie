import { Paper, Typography, IconButton } from "@material-ui/core";
import * as React from "react";
import styled, { css } from "styled-components";
import { ActiveChatName } from "./atoms/ActiveChatName";
import { ActiveChatTitle } from "./atoms/ActiveChatTitle";
import { MoreVert } from "@material-ui/icons";

export const ActiveChatHeading = () => {


	return (
		<Wrapper elevation={0} square>
			<DataWrapper>
				<Typography>
					<ActiveChatName />
				</Typography>
				<Typography variant="subtitle2" color="textSecondary">
					<ActiveChatTitle />
				</Typography>
			</DataWrapper>
			<IconButton size="small"><MoreVert /></IconButton>
		</Wrapper>
	);
};

const Wrapper = styled(Paper)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: ${({theme}) => theme.spacing(1)}px;
`;
