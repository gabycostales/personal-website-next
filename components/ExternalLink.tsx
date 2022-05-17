type ExternalLinkProps = {
  href: string;
  children: JSX.Element | string;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
