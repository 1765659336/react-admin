import { useLocation } from 'react-router';
import ShowNews from "src/views/News/components/ShowNews";
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getNews } from 'src/request/News';
import TableSkeleton from 'src/components/TableSkeleton';

interface Props {
    setIsSkeleton: Function
}
const NewsDraftDetailsPure: React.FC<Props> = ({ setIsSkeleton }) => {

    const { state: { id, type, previousPath, previousTitle } } = useLocation();

    const navigate = useNavigate();

    const [currentNewsData, setCurrentNewsData] = useState<{ newsTitle: string, newsClassification: number, content: string }>({ newsTitle: "", newsClassification: 0, content: "" });

    const [initLock, setInitLock] = useState(false);

    useEffect(() => {
        getNews({ id }).then((res: any) => {
            if (res.data.status) {
                const { newsTitle, newsClassification, content } = res.data.content[0];
                setCurrentNewsData({ newsTitle, newsClassification, content });
                setInitLock(true);
                setIsSkeleton(true);
            }
        })
    }, []);

    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => navigate(previousPath, { replace: true })}
                title={previousTitle}
            />
            {initLock && <ShowNews newsTitle={currentNewsData.newsTitle} newsClassification={currentNewsData.newsClassification} content={currentNewsData.content} type={type} id={id} previousPath={previousPath} />}
        </>
    )
}

const NewsDraftDetails = () => {
    return (
        <TableSkeleton Comp={NewsDraftDetailsPure} />
    )
}

export default NewsDraftDetails;