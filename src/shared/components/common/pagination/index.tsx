import {
  DisplayedPageCount,
  QuantityPerPage,
} from "@shared/constants/pagination";
import { useMemo, useState } from "react";
import { PaginationItem } from "@shared/components/common/pagination/item";
import { ChevronIcon } from "@shared/components/icons/chevron";

interface IPaginationProps {
  page: number;
  count: number;
  handlePageClick(page: number): void;
}

const fillPagesArray = (lastPage: number) => {
  return (page: number): number[] => {
    const pages = [];
    let position = page % DisplayedPageCount;
    if (position == 0) position = DisplayedPageCount;
    for (let i = position; i > 0; i--) {
      pages.push(page - i + 1);
    }

    let end = pages[0] + (DisplayedPageCount - 1);
    if (end > lastPage) end = lastPage;
    end = end % DisplayedPageCount;
    if (end == 0) end = DisplayedPageCount;
    for (let i = position; i < end; i++) {
      pages.push(page + (i - position) + 1);
    }

    if (lastPage - pages.at(-1)! === 1) pages.push(lastPage);

    return pages;
  };
};

export const Pagination = ({
  page,
  count,
  handlePageClick,
}: IPaginationProps) => {
  const lastPage = Math.ceil(count / QuantityPerPage);
  const fillPages = useMemo(() => {
    return fillPagesArray(lastPage);
  }, [lastPage]);
  const [pages, setPages] = useState<number[]>(fillPages(page));

  const handleMoveForward = () => {
    if (pages.at(-1) !== lastPage)
      setPages(fillPages(pages[0] + DisplayedPageCount));
  };

  const handleMoveBack = () => {
    if (pages[0] !== 1) setPages(fillPages(pages[0] - DisplayedPageCount));
  };

  return (
    <div
      className={
        count <= QuantityPerPage ? "hidden" : "flex w-full justify-center"
      }
    >
      <PaginationItem
        handlePageClick={handleMoveBack}
        isDisabled={true}
        className={pages[0] !== 1 ? "cursor-pointer" : ""}
      >
        <ChevronIcon
          className={`rotate-90 ${
            pages[0] === 1 ? "fill-gray-60" : "fill-primary-90 "
          }`}
        />
      </PaginationItem>
      {pages[0] !== 1 && (
        <>
          <PaginationItem handlePageClick={() => handlePageClick(1)}>
            1
          </PaginationItem>
          <PaginationItem isDisabled={true}>...</PaginationItem>
        </>
      )}
      {pages.map((p) => (
        <PaginationItem
          handlePageClick={() => handlePageClick(p)}
          isCurrent={p === page}
        >
          {p}
        </PaginationItem>
      ))}
      {pages.at(-1) !== lastPage && (
        <>
          <PaginationItem isDisabled={true}>...</PaginationItem>
          <PaginationItem handlePageClick={() => handlePageClick(lastPage)}>
            {lastPage}
          </PaginationItem>
        </>
      )}
      <PaginationItem
        handlePageClick={handleMoveForward}
        isDisabled={true}
        className={pages.at(-1) !== lastPage ? "cursor-pointer" : ""}
      >
        <ChevronIcon
          className={`rotate-[270deg] ${
            pages.at(-1) === lastPage ? "fill-gray-60" : "fill-primary-90 "
          }`}
        />
      </PaginationItem>
    </div>
  );
};
