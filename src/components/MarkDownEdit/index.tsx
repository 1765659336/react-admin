import React from 'react';
import Editor from 'for-editor';
import style from "./index.module.less";

const MarkDownEdit: React.FC<{ value: string, onChange: Function }> = ({ value, onChange }) => {

    return (
        <div className={style["editor-wrap"]}>
            <Editor value={value} onChange={(value) => onChange(value)} height="100%" />
        </div>
    )
}

export default MarkDownEdit;