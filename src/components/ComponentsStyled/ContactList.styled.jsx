import styled from 'styled-components';

export const ContactListWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhonebookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  list-style: none;
`;

export const PhonebookItem = styled.li`
  display: flex;
  justify-content: space-between;
  letter-spacing: 2px;
  background-color: #555;
  padding: 12px;
  border-radius: 8px;
`;

export const ContactSpan = styled.span`
  font-weight: 500;
  color: #ddd;
`;

export const ContactLink = styled.a`
  margin-left: 24px;
  height: 20px;
  color: #ddd;
  text-decoration: none;
  border-bottom: solid 1px transparent;
  transition: all 0.3s;
  &:hover {
    color: #3994c8;
    border-color: #464748;
  }
`;
export const ContactDeleteBtn = styled.button`
  display: inline-block;
  margin-left: 40px;
  padding: 6px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #fcfcfc; 
  background-color: #444; 
  border: 1px solid #555;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #333; 
    background-color: #e34141;
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;