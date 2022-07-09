import styled from "styled-components";
import { Button } from "./Button";

export const PrimaryButton = styled(Button)`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryShade2};
`;
