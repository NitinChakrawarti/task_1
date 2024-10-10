const Banner = ({ images, speed = 5000 }) => {
    return (
      <div className="inner relative w-full overflow-x-hidden h-[5rem] ">
        <div className="wrapper flex absolute overflow-x-hidden">
          <section style={{ "--speed": `${speed}ms` }} className="auto_scroll_brand_section overflow-x-hidden">
            {images.map(({ id, image }) => (
              <div className="image overflow-x-hidden" key={id}>
                <img src={image} className="max-w-[150px] h-[5rem]  ml-[40px]  p-[0 15px] object-cover" alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className="auto_scroll_brand_section">
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} className="max-w-[150px]  ml-[40px]  h-[5rem] p-[0 15px] object-cover" />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}
          className="auto_scroll_brand_section">
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} className="max-w-[150px]  ml-[40px]  h-[5rem] p-[0 15px] object-cover"/>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };