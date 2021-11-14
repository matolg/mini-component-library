import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    icon: {
      size: 16,
      strokeWidth: 1,
      margin: 8,
    },
    iconSize: 16,
    iconStroke: 1,
    fontSize: 14,
    lineHeight: 16,
    borderWidth: 1,
  },
  large: {
    icon: {
      size: 24,
      strokeWidth: 2,
      margin: 12,
    },
    fontSize: 18,
    lineHeight: 21,
    borderWidth: 2,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const config = sizes[size];
  return (
    <Wrapper width={width} {...config}>
      <Icon
        id={icon}
        size={config.icon.size}
        strokeWidth={config.icon.strokeWidth}
      />
      <Input placeholder={placeholder} {...config} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  margin-left: ${(props) => props.icon.margin}px;
  color: inherit;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.label`
  width: fit-content;
  min-width: ${(props) => props.width}px;
  border-bottom: ${(props) => props.borderWidth}px solid ${COLORS.black};
  display: flex; // not sure this is eligible but whatever
  &:focus-within {
    outline: 2px auto Highlight; // FF
    outline: 2px auto -webkit-focus-ring-color; // Chrome, Safari
    outline-offset: 2px;
    border-radius: 2px;
  }
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
