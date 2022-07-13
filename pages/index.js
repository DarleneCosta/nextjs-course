import React from "react";
import Link from "../src/components/Link";

function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      {" "}
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: blue;
        }
      `}</style>
    </React.Fragment>
  );
}
export default function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Title as="h1"> Alura Cases - Home Page</Title>
      <Link href="/faq" passHref>
        Ir para o FAQ
      </Link>
    </div>
  );
}