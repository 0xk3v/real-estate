import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

	html{
		scroll-behavior: smooth;
	}
		*,*::before,*::after{
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	    font-family: 'Lato', sans-serif;
	}
	img{ width: 100%; }
	.btn{
		padding: .5rem 1rem;
		text-transform: uppercase;
		outline: none;
		border: none;
		font-weight: 500;
		cursor: pointer;
		transition: .5s ease-out;
	
		&-primary{
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.seondary};
		&:hover{
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.primary};
	}
		}
		&-lg{
			padding: 1rem 2rem;
		}
		&-round{
			border-radius: 3rem;
		}
	}
`;

export default GlobalStyles;
