import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import TextareaAutosize from "react-textarea-autosize";

export const TitleContainer = styled.div`
  background-color: #343a40;
  color: #ffffff;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: #ff9999;
    }
  }
`;

export const TitleInput = styled(TextareaAutosize)`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  margin: 0 20px;
  width: 100%;
  min-height: 36px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
  }
`;

export const TitleButton = styled.button`
  border: 0;
  background-color: #ff9999;
  color: #ffffff;
  height: 36px;
  min-width: 72px;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    color: #ff9999;
    background-color: #ffffff;
  }
`;

export const ContentPreview = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

export const ContentInput = styled(TextareaAutosize)`
  color: #e9eded;
  &::placeholder {
    color: rgba(233, 237, 237, 0.5);
  }
  font-family: "Dokdo", "Apple SD Gothic Neo", sans-serif;
  font-size: 24px;
  flex: 1 1;
  padding: 20px;
  background-color: #0d2f2d;
  height: 100% !important;
  line-height: 1.5;
`;

export const ContentMarkdown = styled.div`
  flex: 1 1;
  padding: 20px;
  height: 100%;
`;

export const MarkdownInput = styled(Markdown)`
  font-size: 24px;
  & h1 {
    font-size: 24px;
  }
  & pre {
    padding: 14px;
    margin: 10px 0;
    overflow: auto;
    border: 1px solid #f1f3f5;
    background: #fafafa;
  }
  & code {
    line-height: 1.5;
  }
`;

export const Button = styled.button``;
