/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper value={value} size={size}>
      <ProgressStripe value={value} size={size} />
      {/* not sure how to use this correctly */}
      <VisuallyHidden>{`Progress is ${value}% done`}</VisuallyHidden>
    </Wrapper>
  );
};

const sizes = {
  small: css`
    height: 8px;
    border-radius: 4px;
  `,
  medium: css`
    height: 12px;
    border-radius: 4px;
  `,
  large: css`
    height: 24px;
    padding: 4px;
    border-radius: 8px;
  `,
};

const Wrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuenow": props.value,
  "aria-valuemin": 0,
  "aria-valuemax": 100,
}))`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
  ${(props) => sizes[props.size]}
`;

const ProgressStripe = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background: ${COLORS.primary};
  // this looks a bit hacky as for other sizes that do not have padding overflow:hidden works perfectly
  border-radius: ${(props) => (props.value === 100 ? "4px" : "4px 0 0 4px")};
`;

export default ProgressBar;
