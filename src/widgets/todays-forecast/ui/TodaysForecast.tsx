import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import { FontStyles } from "../../../shared/config";
import { Text } from "../../../shared/ui";

export const TodaysForecast: React.FC = () => {
	return (
		<Container>
			<Text fontStyle={ FontStyles.BOLD } size={ 24 }>Today</Text>
			<ScrollView />
		</Container>
	);
};

const Container = styled.View`
  margin-top: 24px;
`;
