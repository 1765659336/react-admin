import { message, Space, Table, Tag, Skeleton } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { getNews } from 'src/request/News';

interface DataType {
    id: string,
    key: string;
    newsTitle: string;
    newsClassificationText: string
}

const NewsDraftList: React.FC = () => {

    const navigate = useNavigate();

    const location = useLocation();

    // 发布审核
    const release = (id: string) => {
        console.log(id);
        // 调用发布审核的接口，并重新刷新页面
        message.success("发布审核成功" + id)
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

    // const dataSource: DataType[] = [
    //     {
    //         id: '001',
    //         key: '1',
    //         newsTitle: 'John Brown',
    //         tags: ['热点'],
    //     },
    //     {
    //         id: '002',
    //         key: '2',
    //         newsTitle: 'Jim Green',
    //         tags: ['民生'],
    //     },
    //     {
    //         id: '003',
    //         key: '3',
    //         newsTitle: 'Joe Black',
    //         tags: ['军事'],
    //     },
    // ];

    const [dataSource, setDataSource] = useState([]);

    const [isSkeleton, setIsSkeleton] = useState(false);

    useEffect(() => {
        getNews({ newsStatus: 1 }).then((res: any) => {
            setDataSource(res.data.content);
            setIsSkeleton(true)
        })
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: '新闻标题',
            dataIndex: 'newsTitle',
            key: 'newsTitle',
        },
        {
            title: '新闻分类',
            key: 'tags',
            dataIndex: 'address',
            render: (_, { newsClassificationText }) => (
                <Tag color={'volcano'} key={newsClassificationText}>
                    {newsClassificationText.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => {
                console.log(record);
                return (
                    <Space size="middle">
                        <a onClick={() => release(record.id)}>发布审核</a>
                        <a onClick={() => edit(record.id)}>编辑</a>
                        <a onClick={() => view(record.id)}>查看</a>
                    </Space >
                )
            },
        },
    ];

    return (
        <>
            {isSkeleton ? <Table columns={columns} dataSource={dataSource} /> : <Skeleton />}
        </>
    )
}

export default NewsDraftList;
