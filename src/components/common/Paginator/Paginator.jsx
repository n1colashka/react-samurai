import styles from "./Paginator.module.css";
import {useState} from "react";

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const partCount = Math.ceil(pagesCount / props.partSize);
    const [partNumber, setPartNumber] = useState(1);
    const leftPartPageNumber = (partNumber - 1) * props.partSize + 1;
    const rightPartPageNumber = partNumber  * props.partSize;

    return (
            <ul className={styles.pagination}>
                { partNumber > 1 && <li onClick={() => setPartNumber(partNumber - 1)}>prev</li> }
                {pages
                    .filter(page => page >= leftPartPageNumber && page <= rightPartPageNumber)
                    .map(page => {
                        return (
                            <li
                                key={page}
                                className={props.currentPage === page && styles.active}
                                onClick={(e) => props.onPageChanged(page)}>
                                {page}
                            </li>
                        );
                    })}
                { partCount > partNumber && <li onClick={() => setPartNumber(partNumber + 1)}>next</li> }
            </ul>
    )
}

export default Paginator;