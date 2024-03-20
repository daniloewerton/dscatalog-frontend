import { ReactComponent as ArrawIcon } from 'assets/images/arrow.svg';
import './styles.css';
import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

// yarn add react-paginate@7.1.3 @types/react-paginate@7.1.1 - lib para montar o elemento de paginação

const Pagination = ({ pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={range}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
      previousLabel={
        <div className="pagination-arrow-container">
          <ArrawIcon />
        </div>
      }
      nextLabel={
        <div className="pagination-arrow-container">
          <ArrawIcon />
        </div>
      }
    />
  );
};

export default Pagination;
