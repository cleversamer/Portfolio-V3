const Pre = ({ load }) => {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;
