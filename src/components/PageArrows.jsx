function PageArrows() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="page-arrows">
        <button
          type="button"
          className="page-arrow"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Sus"
        >
          ↑
        </button>
  
        <button
          type="button"
          className="page-arrow"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          title="Jos"
        >
          ↓
        </button>
      </div>
    );
  }
  
  export default PageArrows;