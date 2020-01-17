import React, { useState, useCallback, useRef } from "react";
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
  const textArea = useRef<HTMLTextAreaElement>(null);

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
  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.currentTarget;

      const newValue =
        _content.substring(0, selectionStart) +
        "  " +
        _content.substring(selectionEnd);

      setContent(newValue);
      if (textArea.current) {
        textArea.current.value = newValue;
        textArea.current.selectionStart = textArea.current.selectionEnd =
          selectionStart + 2;
      }
    }
  };
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
          onKeyDown={handleKeydown}
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
