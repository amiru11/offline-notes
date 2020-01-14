import React, { useState, useCallback } from "react";
import { MdArrowBack } from "react-icons/md";

import {
  TitleContainer,
  TitleInput,
  TitleButton,
  ContentPreview,
  ContentInput,
  ContentMarkdown,
  MarkdownInput
} from "../../styles/editor";
import { Link } from "react-router-dom";

function Editor({ id, title, content, onSave }: any): JSX.Element {
  const [_title, setTitle] = useState<string>(title || "");
  const [_content, setContent] = useState<string>(content || "");

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
      const { name, value } = target;
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "content":
          setContent(value);
          break;
        default:
          break;
      }
    },
    []
  );
  const _onSave = (): void => {
    onSave({ title: _title, content: _content, id });
  };
  // const input = "# This is a header\n\nAnd this is a paragraph";
  return (
    <>
      <TitleContainer>
        <Link to={"/"}>
          <MdArrowBack />
        </Link>
        <TitleInput
          value={_title}
          onChange={handleChange}
          placeholder={"👨🏻‍💻.."}
          name={"title"}
        />
        <TitleButton onClick={_onSave}>Save</TitleButton>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={_content}
          onChange={handleChange}
          placeholder={"Tell me Your story"}
          name={"content"}
        />
        <ContentMarkdown>
          <MarkdownInput children={_content} className={"markdown"} />
        </ContentMarkdown>
      </ContentPreview>
    </>
  );
}

export default Editor;
