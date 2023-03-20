const useColumns = ({ getColumnSearchProps }: any) => {
  return [
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: 50,
      render(thumbnail: string) {
        return <a href={thumbnail} target="_blank"><img src={thumbnail} style={{ width: 30, height: 30 }}/></a>
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '35%',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      width: '35%',
      ...getColumnSearchProps('brand'),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      ...getColumnSearchProps('price'),
    },
  ]
}

export default useColumns;