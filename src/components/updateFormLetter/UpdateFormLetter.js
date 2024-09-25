import {  useState  } from 'react';
import { Typography  } from 'antd';
const { Paragraph } = Typography;
export function UpdateFormLetter() {
  const [editableStr, setEditableStr] = useState(
    'This is a loooooooooooooooooooooooooooooooong editable text with suffix.',
  );
  return (
    <>
      <Paragraph
        editable={{
          onChange: setEditableStr,
        }}
      >
        {editableStr}
      </Paragraph>
    </>
  );
};
