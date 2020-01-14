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
`;

export const TitleInput = styled(TextareaAutosize)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin: 0 20px;
  width: 100%;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
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
  font-family: "Inconsolata", "D2 Coding", sans-serif;
  font-size: 18px;
  flex: 1 1;
  padding: 20px;
  background-color: #263238;
  height: 100% !important;
  line-height: 1.5;
`;

export const ContentMarkdown = styled.div`
  flex: 1 1;
  padding: 20px;
  height: 100%;
`;

export const MarkdownInput = styled(Markdown)`
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
