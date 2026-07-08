import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ kicker, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand-blue sm:text-sm">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl lg:text-[40px]">{title}</h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base text-foreground-muted sm:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
