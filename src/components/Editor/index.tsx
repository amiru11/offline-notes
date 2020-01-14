import React, { useState, useCallback } from "react";
import Markdown from "markdown-to-jsx";

import {
  TitleContainer,
  TitleInput,
  ContentPreview,
  ContentInput,
  Button
} from "../../styles/editor";

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
    onSave(_title, _content, id);
  };
  // const input = "# This is a header\n\nAnd this is a paragraph";
  return (
    <>
      <TitleContainer>
        <TitleInput
          value={_title}
          onChange={handleChange}
          placeholder={"Untitled..."}
          name={"title"}
        />
        <Button onClick={_onSave}>Save</Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={_content}
          onChange={handleChange}
          placeholder={"# This supports markdown!"}
          name={"content"}
        />
        <Markdown children={_content} className={"markdown"} />
      </ContentPreview>
    </>
  );
}

export default Editor;
