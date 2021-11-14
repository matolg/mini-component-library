import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import { COLORS } from "../../constants";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <SelectComponent label={label} value={value} onChange={onChange}>
        {children}
      </SelectComponent>
      <DisplayValue>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2} size={24} />
      </DisplayValue>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectComponent = styled.select`
  appearance: none;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const DisplayValue = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  font-size: (16 / 16) rem;
  line-height: (19 / 16) rem;
  padding: 12px 10px 12px 16px;
  display: flex;
  align-items: center;
  color: ${COLORS.gray700};
  column-gap: 16px;
  ${SelectComponent}:hover + & {
    color: ${COLORS.black};
  }
  ${SelectComponent}:focus + & {
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

export default Select;
