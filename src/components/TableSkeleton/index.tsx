
import React, { useState } from "react";
import style from "./index.module.less";

interface Props {
    Comp: React.FC<{ setIsSkeleton: Function }>
}
const TableSkeleton: React.FC<Props> = ({ Comp }) => {

    const [isSkeleton, setIsSkeleton] = useState(false);

    return (
        <>
            {!isSkeleton && <div className={style.skeleton}>Loading</div>}
            <Comp setIsSkeleton={setIsSkeleton} />
        </>
    )
}

export default TableSkeleton;