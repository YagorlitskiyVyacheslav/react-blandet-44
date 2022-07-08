import styled from "styled-components";
import { Button } from "./Button";

export const SecondaryButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.primaryShade2};
  color: ${({ theme }) => theme.colors.primaryShade2};
  background-color: transparent;
`;
