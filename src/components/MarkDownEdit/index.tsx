import React, { useEffect } from 'react';
import Editor from 'for-editor';
import style from "./index.module.less";

const MarkDownEdit: React.FC<{ contentValue: string, onChange: Function, getNewsByMarkDownEdit?: Function }> = ({ contentValue, onChange, getNewsByMarkDownEdit }) => {

    useEffect(() => {
        console.log(contentValue);
    }, [])

    const changeContent = (value: string) => {
        onChange(value);
        getNewsByMarkDownEdit && getNewsByMarkDownEdit(value);
    }

    return (
        <div className={style["editor-wrap"]}>
            <Editor value={contentValue} onChange={(value) => changeContent(value)} height="100%" />
        </div>
    )
}

export default MarkDownEdit;