import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	html, body, #root {
			margin: 0;
			padding: 0;
			height: 100%;
	}
	:root {
		--greyColor: #A2A19E;
		--blackColor: #373630;
		--pinkColor: #ff9999;
	}
	body {
		font-family: "Apple SD Gothic Neo", AppleSDGothicNeo, "Noto Sans CJK KR", NanumGothic, "Malgun Gothic", "맑은 고딕", 돋움, dotum, arial, sans-serif;
		color:var(--blackColor);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		-webkit-box-sizing: inherit;
		box-sizing: inherit; 
	}
	a {
		color:inherit;
		text-decoration:none;
	}
	div{
		margin:0;
	}
	input,
	textarea{
		appearance:none;
		border:none;
		background-color:transparent;
		resize:none;
		&::placeholder {
			color: #E7E7E6;
		}
		&:focus,
		&:active{
			outline:none;
		}
	}
	.markdown a{
		text-decoration:underline;
	}
	button{
		appearance:none;
		border:none;
		background-color:transparent;
		font-weight:600;
		font-size:15px;
		cursor:pointer;
		border:2.5px solid var(--blackColor);
		&:focus,
		&:active{
			outline:none
		}
	}
`;
