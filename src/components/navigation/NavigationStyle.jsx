import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background-color: rgba(255,255,255,.4);
    backdrop-filter: blur(3px);
	height: 85px;
	font-size: 2rem;
    perspective: 1000px;
    `;

export const Logo = styled(Link)`
    color: #42009e;
	text-decoration: none;
	font-size: 3.5rem;
    margin: 0 0 1rem 1rem;
    transform: rotateY(360deg);
	animation: rotateAnimation 8s linear infinite;
	@keyframes rotateAnimation {
	from {
		transform: rotateY(360deg);
	}
	to {
		transform: rotateY(0deg);
	}
}
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  margin-right: 2rem;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background-color: #42009e;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px){
    display:flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
        margin: 0 .5rem;
        gap: .5rem;
		width: 100%;
		max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
		transition: max-height 0.3s ease-in;
	}
`;

export const MenuLink = styled(NavLink)`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
    color: #42009e;
    transition: all 0.3s ease-in;
	font-size: 2rem;
	font-family: "Girassol", sans-serif;

	&:hover {
        color: #42009e;
        font-weight: bold;
	}

	&.active {
        color: #42009e;
		font-weight: bold;
	}

	@media (max-width: 768px) {
		background-color: rgba(255,255,255,.5);
        backdrop-filter: blur(5px);
		border: 1px solid #42009e;
		border-radius: 10px;
		width: 100%;
	}
`;
