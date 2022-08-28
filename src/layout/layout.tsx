import { ReactNode } from "react";
import { Navigation } from "./navigation/navigationComponent";

interface Props {
  children: Element | ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Navigation />
    <main className='layout-main'>{children}</main>
  </>
);
