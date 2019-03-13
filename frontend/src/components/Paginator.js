import React from "react";
import PropTypes from "prop-types";
import "./Paginator.scss";

class Paginator extends React.Component {
  render() {
    // console.log("PROPS FROM PAGINATOR", this.props);
    const { totalPages, currentPage, buttonCount } = this.props;

    let minPage = 0;
    const temp = currentPage - Math.floor(buttonCount / 2);
    if (temp > minPage) {
      minPage = temp;
    }
    // let minPage = Math.max(0, temp);
    const maxPage = Math.min(minPage + buttonCount - 1, totalPages - 1);
    minPage = Math.max(minPage, maxPage - buttonCount + 1);

    const paginationItems = [];
    for (let i = minPage; i <= maxPage; i++) {
      paginationItems.push(
        <span key={i}>
          <button
            onClick={() => this.props.goTo(i)}
            className="pageButton"
            style={
              this.props.currentPage === i ? { backgroundColor: "#ffd500" } : {}
            }
          >
            {i + 1}
          </button>
        </span>
      );
    }
    return (
      <React.Fragment>
        {this.props.totalPages ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <div
              aria-label="Page navigation example"
              style={{ padding: "0", margin: "0" }}
            >
              <span>
                <button
                  className="pageButton"
                  onClick={() => this.props.goTo(0)}
                >
                  {"|<"}
                </button>
              </span>
              {paginationItems}
              <span>
                <button
                  className="pageButton"
                  onClick={() => this.props.goTo(this.props.totalPages - 1)}
                >
                  {">|"}
                </button>
              </span>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Paginator.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  goTo: PropTypes.func,
  buttonCount: PropTypes.number
};

Paginator.defaultProps = {
  totalPages: 0,
  currentPage: 0,
  buttonCount: 9
};

export default Paginator;
