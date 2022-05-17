type ExternalLinkProps = {
  href: string;
  children: JSX.Element | string;
  label?: string;
};

export const ExternalLink = ({ href, children, label }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
};

export default ExternalLink;
