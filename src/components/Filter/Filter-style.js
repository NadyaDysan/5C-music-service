import styled, { css } from 'styled-components/macro'

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: ${props => props.theme.color}
`

export const FilterRadioMainFieldset = styled.fieldset`
  border: none;
`

export const FilterDropdown = styled.fieldset`
  position: relative;
  border: none;
`
export const FilterButton = styled.button`
  font-family: 'StratosSkyeng', sans-serif;
  margin-right: 10px;
  background: none;
  color: ${props => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${props => props.theme.color};
  border-radius: 60px;
  padding: 6px 20px;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`
export const FilterPanelWrapper = styled.div`
  padding: 18px;
  position: absolute;
  background: ${props => props.theme.lighterGreyColor};
  border-radius: 12px;
  margin-top: 15px;
`
export const FilterPanel = styled.div`
  color: ${props => props.theme.color};
  height: 305px;
  width: 248px;
  gap: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  font-size: 18px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 300px ${props => props.theme.lightGreyColor};
    -webkit-border-radius: 10px;
    border-radius: 10px;
    margin: 32px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${props => props.theme.color};
  }
  &::-webkit-scrollbar-corner {
    padding: 10px;
  }
`

export const FilterPanelItems = styled.fieldset`
  border: none;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #b672ff;
      text-decoration: underline;
    `}
`

export const FilterRadioPanel = styled.div`
  position: absolute;
  display: flex;
  padding: 24px;
  margin-top: 10px;
  border-radius: 12px;
  gap: 14px;
  background-color: ${props => props.theme.lighterGreyColor};
`
export const FilterLabel = styled.label`
  cursor: pointer;
`
export const FilterRadioInput = styled.input`
  accent-color: white;
  margin-right: 6px;
  cursor: pointer;
  cursor: pointer;
`
