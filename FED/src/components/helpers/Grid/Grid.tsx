import clsx from 'clsx';

export type ComponentWrapperProps = {
  children?: React.ReactNode | React.ReactNode[];
  dataComponent?: string;
  variant: ComponentSizeVariants;
  backgroundVariant?: ComponentBackgroundVariants;
  gap?: GapSizes;
  padding?: string;
};

export const ComponentSizes = {
  ml: 'ml' as ComponentSizeVariants,
  lg: 'lg' as ComponentSizeVariants,
  xl: 'lg' as ComponentSizeVariants,
  full: 'full' as ComponentSizeVariants,
};

export type ComponentSizeVariants = 'ml' | 'lg' | 'xl' | 'full';
export type ComponentBackgroundVariants = 'black' | 'gray' | 'white' | 'primary' | 'secondary';

export type GapSizes = 'gap-s' | 'gap-x-0';

// @TODO: break out the grid class later so we don't have to tell each component to span 12 columns every time we render it
// const baseGridClasses = 'grid ';
// const defaultGridClasses = 'grid-cols-1' + baseGridClasses;
// const moreGridClasses = 'grid-cols-1 gap-y-0 md:grid-cols-12 md:gap-s' + baseGridClasses;

// TODO: what are we doing with the event fields??
//

const containerVariants = {
  full: 'w-full',
  xl: 'xl:mx-auto md:max-w-screen-xl',
  lg: 'lg:mx-auto md:max-w-screen-lg',
  ml: 'md:mx-auto md:max-w-screen-ml',
};

const containerBgVariants = {
  black: 'theme-black bg-theme-bg',
  gray: 'theme-gray bg-light-gray',
  white: 'theme-white',
  primary: 'theme-primary',
  secondary: 'theme-secondary',
};

export function hashCode(s: string) {
  let hash = s.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  hash = Math.abs(hash);

  return hash.toString();
}

// const spacingValues: Record<ComponentSpacing, string> = {
//   standard: 'my-8',
//   reduced: 'my-4',
//   paddingStandard: 'py-8',
//   paddingReduced: 'py-4',
//   none: 'my-0',
// };

export const Grid = ({
  children,
  variant,
  backgroundVariant,
  dataComponent,
  gap,
  padding,
}: ComponentWrapperProps): JSX.Element => {
  const gridClass = `section-grid grid grid-cols-2 md:grid-cols-12 ${padding || 'px-m'} ${
    gap || 'gap-2 md:gap-5'
  } ${dataComponent === 'product/productintro' ? 'relative' : ''}`;

  return (
    <section className="mb-12" data-component={dataComponent}>
      <div
        className={clsx(
          containerVariants[variant],
          backgroundVariant ? containerBgVariants[backgroundVariant] : 'theme-white'
        )}
      >
        <div className={gridClass}>{children}</div>
      </div>
    </section>
  );
};
