import { StyledButton } from './styles';

const Tabs = ({ gameTabs, tabActive, setTabActive }) => {
	return (
		<>
			{gameTabs.map((tab, index) => {
				return (
					<StyledButton
						key={tab.id}
						onClick={() => handleTabActive(index, setTabActive)}
						$active={index === tabActive}
					>
						{tab.name}
					</StyledButton>
				);
			})}
		</>
	);
};

const handleTabActive = (tabIndex, setTabActive) => {
	setTabActive(tabIndex);
};

export default Tabs;