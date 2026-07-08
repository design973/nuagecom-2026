import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ExpertiseCard({ title, description, href, className }: ExpertiseCardProps) {
  return (
    <Link href={href} className={cn('group block', className)}>
      <Card hoverable className="flex h-full flex-col justify-between">
        {/* TODO: remplacer par un visuel réel (capture, photo de réalisation) */}
        <div className="aspect-[4/3] w-full rounded-card bg-background" />
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-foreground-muted">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-blue">
            Découvrir
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}
