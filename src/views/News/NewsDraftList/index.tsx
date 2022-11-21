import { message, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import TableSkeleton from 'src/components/TableSkeleton';
import { getNews, putNewsStatus } from 'src/request/News';

interface DataType {
    id: string,
    key: string;
    newsTitle: string;
    newsClassificationText: string
}

interface Props {
    setIsSkeleton: Function
}

const NewsDraftListPure: React.FC<Props> = ({ setIsSkeleton }) => {

    const navigate = useNavigate();

    const location = useLocation();

    const init = () => {
        setIsSkeleton(false);
        getNews({ newsStatus: 1 }).then((res: any) => {
            const transferData = res.data.content.map((item: { id: string, key: string }) => { item.key = item.id; return item; })
            setDataSource(transferData);
            setIsSkeleton(true);
        })
    }

    // 发布审核
    const release = (id: string) => {
        // 调用发布审核的接口，并重新刷新页面
        putNewsStatus({ id, newsStatus: 2 }).then((res: any) => {
            if (res.data.status) {
                message.success("发布审核成功");
                init();
            }
        })
    }

    // 编辑
    const edit = (id: string) => {
        console.log(id);
        navigate("/news/manage/newsItem/details", { replace: false, state: { id, type: "edit", previousPath: location.pathname, previousTitle: "草稿箱新闻详情编辑" } });
    }

    // 查看
    const view = (id: string) => {
        console.log(id);
        navigate("/news/manage/newsItem/details", { replace: false, state: { id, type: "view", previousPath: location.pathname, previousTitle: "草稿箱新闻详情查看" } });
    }

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        init();
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: '新闻标题',
            key: 'newsTitle',
            dataIndex: 'newsTitle',
        },
        {
            title: '新闻分类',
            key: 'newsClassificationText',
            dataIndex: 'newsClassificationText',
            render: (_, { newsClassificationText }) => (
                <Tag color={'volcano'} key={newsClassificationText}>
                    {newsClassificationText.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, { id }) => {
                return (
                    <Space size="middle" key={id}>
                        <a onClick={() => release(id)}>发布审核</a>
                        <a onClick={() => edit(id)}>编辑</a>
                        <a onClick={() => view(id)}>查看</a>
                    </Space >
                )
            },
        },
    ];

    return (
        <Table columns={columns} dataSource={dataSource} />
    )
}


const NewsDraftList = () => {
    return (
        <TableSkeleton Comp={NewsDraftListPure} />
    )
}

export default NewsDraftList;
