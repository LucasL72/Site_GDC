import Container from "react-bootstrap/Container";
const Widget = () => {
  return (
    <div className="widget">
      <Container>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGraine-de-Citoyen-Montgesnois-103923238009537%2F%3Fref%3Dpage_internal&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="700"
          height="450"
          scrolling="yes"
          title="Association GDC"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </div>
  );
};

export default Widget;
