import DocumentsBlock from "components/IssuePage/DocumentsBlock";
import SortBlock from "components/IssuePage/SortBlock";
import { FC } from "react"
// import styled from "styled-components";

const IssuePage: FC = () => {
	return (
		<main>
			<SortBlock />
			<DocumentsBlock />
		</main>
	)
};

// const IssuePageStyle = styled.div

export default IssuePage;