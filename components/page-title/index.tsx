import styles from './PageTitle.module.css';

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className={styles.title}>
      <>
        <span className={styles.bracket}>{'<'} </span> {title}{' '}
        <span className={styles.bracket}> {'>'}</span>
      </>
    </h1>
  );
};

export default PageTitle;
