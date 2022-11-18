import { useLocation } from 'react-router';
import ShowNews from "src/views/News/components/ShowNews";
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router';

const mockData: Array<{
    id: string,
    newsTitle: string,
    newsClassification: string,
    content: string
}> = [
        {
            id: "001",
            newsTitle: '新闻标题',
            newsClassification: '新闻分类',
            content: "```js\nconsole.log(\"Hello World\")\n```"
        }
    ]

const NewsDraftDetails = () => {

    const { state: { id, type, previousPath, previousTitle } } = useLocation();

    const navigate = useNavigate();

    const { newsTitle, newsClassification, content } = mockData.find(item => item.id === id) || { newsTitle: '', newsClassification: '', content: '' };
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => navigate(previousPath, { replace: true })}
                title={previousTitle}
            />
            <ShowNews newsTitle={newsTitle} newsClassification={newsClassification} content={content} type={type} previousPath={previousPath} />
        </>
    )
}

export default NewsDraftDetails;