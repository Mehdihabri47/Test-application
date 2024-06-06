import React from 'react';

import VirtuosoTable from '../../widgets/VirtuosoTable/VirtuosoTable.container';

import styles from './videoList.module.scss';
import Section from '../../widgets/Section';

function VideoListView({ videos, isLoading }) {
  console.log(videos);

  const columns = [
    {
      id: 'name',
      label: 'Name',
      render: (row) => row.name,
    },
    {
      id: 'visibility',
      label: 'Visibility',
      render: (row) => <div>{row.visibility}</div>,
    },
    {
      id: 'duration',
      label: 'Duration',
      render: (row) => <div>{row.duration}</div>,
    },
    {
      id: 'createdAt',
      label: 'Created At',
      render: (row) => <div>{new Date(row.createdAt).toLocaleDateString()}</div>,
    },
    {
      id: 'status',
      label: 'Status',
      render: (row) => <div>{row.status}</div>,
    },
  ];

  return (
    <Section label="Videos">
      <VirtuosoTable
        data={videos}
        columns={columns}
        isLoading={isLoading}
        loadMore={() => {}}
        style={{ height: '80vh' }}
      />
    </Section>
  );
}

export default VideoListView;
