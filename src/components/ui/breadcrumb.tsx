import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRightIcon, HomeIcon } from "@/components/ui/icons";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ className = "", ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={`flex items-center text-xs font-semibold text-slate-500 ${className}`}
    {...props}
  />
));
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className = "", ...props }, ref) => (
  <ol
    ref={ref}
    className={`flex flex-wrap items-center gap-1.5 sm:gap-2 break-words ${className}`}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className = "", ...props }, ref) => (
  <li
    ref={ref}
    className={`inline-flex items-center gap-1.5 ${className}`}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className = "", ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={`text-slate-500 hover:text-primary transition-colors cursor-pointer ${className}`}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className = "", ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={`font-bold text-slate-900 ${className}`}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className = "",
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={`inline-flex items-center text-slate-400 [&>svg]:w-3.5 [&>svg]:h-3.5 ${className}`}
    {...props}
  >
    {children ?? <ChevronRightIcon className="w-3.5 h-3.5" />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export interface BreadcrumbCrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

export interface CustomBreadcrumbProps {
  items: BreadcrumbCrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

/**
 * CustomBreadcrumb - Reusable consistent breadcrumb built on Shadcn UI primitives
 */
export function CustomBreadcrumb({
  items,
  className = "",
  showHomeIcon = true,
}: CustomBreadcrumbProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1 || item.isCurrent;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : item.onClick ? (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors font-semibold cursor-pointer"
                  >
                    {isFirst && showHomeIcon && (
                      <HomeIcon className="w-3.5 h-3.5" />
                    )}
                    <span>{item.label}</span>
                  </button>
                ) : item.href ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors font-semibold"
                    >
                      {isFirst && showHomeIcon && (
                        <HomeIcon className="w-3.5 h-3.5" />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-slate-500 font-semibold">
                    {isFirst && showHomeIcon && (
                      <HomeIcon className="w-3.5 h-3.5" />
                    )}
                    <span>{item.label}</span>
                  </span>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
