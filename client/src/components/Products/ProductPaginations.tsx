'use client';
import { FC, useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type TProps = {
  totalItems: number;
  itemPerPage: number;
  getCurrentPage?: (args0: number) => void;
  autoPagination?: boolean;
};

const ProductPaginations: FC<TProps> = ({ totalItems, itemPerPage, getCurrentPage, autoPagination = true }) => {
  const totalPage = Math.ceil(totalItems / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryParam = (page: number) => {
    const params = new URLSearchParams(searchParams as any);
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  // Generate pagination items based on the current page
  const getPaginationItems = () => {
    if (totalPage <= 5) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }
    const middle = Math.max(3, Math.min(currentPage, totalPage - 2));
    return [middle - 2, middle - 1, middle, middle + 1, middle + 2];
  };

  const handlePaginationItemClick = (number: number) => {
    if (number >= 1 && number <= totalPage) {
      setCurrentPage(number);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (currentPage && getCurrentPage) {
      getCurrentPage(currentPage);
    }
  }, [currentPage, getCurrentPage]);
  return (
    <div className="flex gap-1 items-center">
      <button
        className="p-2 hover:bg-slate-50"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        <FaAngleLeft className={`text-lg ${currentPage === 1 ? "text-gray-400" : "text-orangeColor"}`} />
      </button>
      {getPaginationItems().map((paginationItem, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-md ${
            paginationItem === currentPage ? "bg-orangeColor text-white" : "hover:bg-slate-50"
          }`}
          onClick={() => handlePaginationItemClick(paginationItem)}
        >
          {paginationItem}
        </button>
      ))}
      <button
        className="p-2 hover:bg-slate-50"
        onClick={handleNextClick}
        disabled={currentPage === totalPage}
      >
        <FaAngleRight className={`text-lg ${currentPage === totalPage ? "text-gray-400" : "text-orangeColor"}`} />
      </button>
    </div>
  );
};

export default ProductPaginations;
