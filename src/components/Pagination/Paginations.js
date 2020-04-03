// @flow
import * as React from 'react'; 
export function Paginations(props) {
    const pageNumbers = [];
    let renderPageNumbers;
    if (props.total !== null) {
        for (let i = 1; i <= Math.ceil(props.total / props.per_page); i++) {
            pageNumbers.push(i);
        }
        renderPageNumbers = pageNumbers.slice(0, props.per_page).map(number => (
            <a key={number} onClick={() => props.handlePaginationRequest(number)}>{number}</a>
        )); 
    }
    return (
        <div className="pagination_wrapper">
            {renderPageNumbers}
        </div>
    );
};

export default Paginations;