import { message, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import TableSkeleton from "src/components/TableSkeleton";
import { getNews, putNewsStatus } from "src/request/News";

interface DataType {
  id: string;
  key: string;
  newsTitle: string;
  newsClassificationText: string;
  newsStatus: number;
}

interface Props {
  setIsSkeleton: Function;
}

const NewsClassificationListPure: React.FC<Props> = ({ setIsSkeleton }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const [dataSource, setDataSource] = useState([]);

  // 下架
  const changeNewsStatus = (id: string, newsStatus: number) => {
    putNewsStatus({ id, newsStatus }).then((res: any) => {
      const { status } = res.data;
      if (status) {
        message.success("操作成功");
        init();
      }
    });
  };

  // 查看
  const view = (id: string) => {
    console.log(id);
    navigate("/news/manage/newsItem/details", {
      replace: false,
      state: {
        id,
        type: "view",
        previousPath: location.pathname,
        previousTitle: "审核发布新闻详情查看",
      },
    });
  };

  const init = () => {
    setIsSkeleton(false);
    getNews().then((res: any) => {
      const { status, content } = res.data;
      if (status) {
        const transferData = content.map(
          (item: { id: string; key: string }) => {
            item.key = item.id;
            return item;
          }
        );
        setDataSource(transferData);
        setIsSkeleton(true);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "新闻标题",
      dataIndex: "newsTitle",
      key: "newsTitle",
    },
    {
      title: "新闻分类",
      key: "newsClassificationText",
      dataIndex: "newsClassificationText",
      render: (_, { newsClassificationText }) => (
        <Tag color={"volcano"} key={newsClassificationText}>
          {newsClassificationText.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "新闻状态",
      dataIndex: "newsStatusText",
      key: "newsStatusText",
    },
    {
      title: "操作",
      key: "action",
      render: (_, { newsStatus, id }) => {
        return (
          <Space size="middle">
            {newsStatus === 2 ? (
              <a onClick={() => changeNewsStatus(id, 4)}>审核通过</a>
            ) : null}
            {newsStatus === 2 ? (
              <a onClick={() => changeNewsStatus(id, 3)}>驳回</a>
            ) : null}
            {newsStatus === 4 ? (
              <a onClick={() => changeNewsStatus(id, 5)}>发布</a>
            ) : null}
            {newsStatus === 5 ? (
              <a onClick={() => changeNewsStatus(id, 4)}>下架</a>
            ) : null}
            <a onClick={() => view(id)}>查看</a>
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

const NewsClassificationList = () => {
  return <TableSkeleton Comp={NewsClassificationListPure} />;
};

export default NewsClassificationList;
