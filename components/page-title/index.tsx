type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="font-mono flex tracking-wide leading-none font-bold tight-word-spacing justify-around items-center text-7vw mdTablet:text-5xl">
      <>
        <span className="block text-accent">{'<'} </span>{' '}
        <span className="text-center">{title}</span>{' '}
        <span className="block text-accent"> {'>'}</span>
      </>
    </h1>
  );
};

export default PageTitle;
