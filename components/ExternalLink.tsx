type ExternalLinkProps = {
  href: string;
  children: JSX.Element | string;
  label?: string;
  className?: string;
};

export const ExternalLink = ({
  href,
  children,
  label,
  className,
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
