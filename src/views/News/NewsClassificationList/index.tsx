import { message, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useNavigate, useLocation } from 'react-router';

interface DataType {
    id: string,
    key: string;
    newsTitle: string;
    tags: string[];
    newsStatus: string
}

const NewsClassificationList: React.FC = () => {

    const navigate = useNavigate();

    const location = useLocation();

    // 发布审核
    const release = (id: string) => {
        console.log(id);
        // 调用发布审核的接口，并重新刷新页面
        message.success("发布成功" + id)
    }

    // 编辑
    const shelves = (id: string) => {
        console.log(id);
        message.success("下架成功" + id)
    }

    // 查看
    const view = (id: string) => {
        console.log(id);
        navigate("/news/manage/newsItem/details", { replace: false, state: { id, type: "view", previousPath: location.pathname, previousTitle: "审核发布新闻详情查看" } });
    }

    const dataSource: DataType[] = [
        {
            id: '001',
            key: '1',
            newsTitle: 'John Brown',
            tags: ['热点'],
            newsStatus: '未发布'
        },
        {
            id: '002',
            key: '2',
            newsTitle: 'Jim Green',
            tags: ['民生'],
            newsStatus: '未发布'
        },
        {
            id: '003',
            key: '3',
            newsTitle: 'Joe Black',
            tags: ['军事'],
            newsStatus: '已发布'
        },
    ];

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
            render: (_, { tags }) => (
                <>
                    {tags.map(tag => {
                        return (
                            <Tag color={'volcano'} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '新闻状态',
            dataIndex: 'newsStatus',
            key: 'newsStatus',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <a onClick={() => release(record.id)}>发布</a>
                        <a onClick={() => shelves(record.id)}>下架</a>
                        <a onClick={() => view(record.id)}>查看</a>
                    </Space >
                )
            },
        },
    ];

    return (
        <Table columns={columns} dataSource={dataSource} />
    )
}

export default NewsClassificationList;
