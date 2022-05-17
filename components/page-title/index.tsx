type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="page-title">
      <>
        <span className="page-title--bracket">{'<'} </span> {title}{' '}
        <span className="page-title--bracket"> {'>'}</span>
      </>
    </h1>
  );
};

export default PageTitle;
