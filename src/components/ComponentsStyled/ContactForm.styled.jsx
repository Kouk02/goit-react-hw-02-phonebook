import styled from 'styled-components';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;

export const ContactLabel = styled.label`
  position: absolute;
  top: ${({ $hasValue }) => ($hasValue ? '-15px' : '10px')};
  left: ${({ $hasValue }) => ($hasValue ? '6px' : '10px')};
  pointer-events: none;
  transition: 0.2s ease all;
  color: ${({ $hasValue }) => ($hasValue ? '#ddd' : '#999')};
  font-size: ${({ $hasValue }) => ($hasValue ? '12px' : '16px')};
`;

export const ContactInput = styled.input`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  background-color: #444;
  color: #ddd;

  &:focus + ${ContactLabel}, &:valid + ${ContactLabel} {
    top: -10px;
    color: #ddd;
    font-size: 12px;
  }
`;

export const AddContactButton = styled.button`
  margin: 0 auto;
  padding: 8px;
  width: 200px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #ddd;
  border: 1px solid #555;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #444;

  &:hover {
    color: #333;
    background-color: #fff;
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;