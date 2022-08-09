import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import ReactPaginate from 'react-paginate';
import "../styles/CategoryList.css";
import CategoryServices from "../service/CategoryServices";

function CategoryList(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3
  const pagesVisited = pageNumber * usersPerPage

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  // useEffect(() => {
  //     fetch()
  //         .then(res => res.json())
  //         .then(
  //             (result) =>"http://localhost:8080/admin/category" {
  //                 setIsLoaded(true);
  //                 setItems(result);
  //             },
  //             // Note: it's important to handle errors here
  //             // instead of a catch() block so that we don't swallow
  //             // exceptions from actual bugs in components.
  //             (error) => {
  //                 setIsLoaded(true);
  //                 setError(error);
  //             }
  //         )
  // }, [])

  useEffect(() => {
    (async () => {
      try {
        const response = await CategoryServices.getCategory(
          "http://localhost:8080/admin/category"
        );
        setItems(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  // const displayUsers = items.slice(pagesVisited, pagesVisited + usersPerPage)

  const displayUsers = items.slice(pagesVisited, pagesVisited + usersPerPage)
    .map(item => <CategoryItem id={item.id} img={item.moTa} title={item.ten} text={item.diaDiem}/>);

  const pageCount = Math.ceil(items.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className={"App row row-cols-1 row-cols-md-3 g-4"}>
          {displayUsers}
        </div>
        <ReactPaginate
          previous={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    );
  }

}

export default CategoryList;