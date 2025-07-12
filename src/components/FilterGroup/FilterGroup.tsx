import classNames from 'classnames';
import styles from './FilterGroup.module.scss';

export type FilterOption<T> = {
  value: T;
  label: string;
};

interface FilterGroupProps<T extends string> {
  options: FilterOption<T>[];
  activeFilter: T;
  onFilterChange: (filter: T) => void;
  className?: string;
}

const FilterGroup = <T extends string>({ options, activeFilter, onFilterChange, className }: FilterGroupProps<T>) => {
  return (
    <div className={classNames(styles.filterContainer, className)}>
      {options.map(option => (
        <button
          key={option.value}
          className={classNames(styles.filterButton, { [styles.activeFilter]: activeFilter === option.value })}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterGroup; 