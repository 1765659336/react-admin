import { PageHeader, Steps } from 'antd';
import React from 'react';

const NewsClassification: React.FC = () => {

    const description = 'This is a description.';

    return (
        <>
            <PageHeader
                title="Title"
                subTitle="This is a subtitle"
            />
            <Steps
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description,
                    },
                    {
                        title: 'In Progress',
                        description,
                        subTitle: 'Left 00:00:08',
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            />
        </>
    )
}

export default NewsClassification;